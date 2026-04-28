import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const revalidate = 0; // Disable caching so new images appear instantly

export async function GET() {
  try {
    // Search for all images in the specific folder path tagged with "portfolio"
    const results = await cloudinary.search
      .expression('public_id:makeover-portfolio/* AND tags=portfolio')
      .sort_by('created_at', 'desc')
      .with_field('tags')
      .with_field('context')
      .max_results(500)
      .execute();

    const portfolioGroups: Record<string, any> = {};

    results.resources.forEach((img: any) => {
      // Find the group tag (starts with 'group_')
      const groupTag = img.tags?.find((t: string) => t.startsWith('group_'));
      if (!groupTag) return; // Ignore if no group tag

      if (!portfolioGroups[groupTag]) {
        portfolioGroups[groupTag] = { subImages: [] };
      }

      // Check if it's a sub-image
      if (img.tags?.includes('sub_image')) {
        portfolioGroups[groupTag].subImages.push(img.secure_url);
      } else {
        // It's the main image! We extract category, title, and link from it.
        const categoryTag = img.tags?.find((t: string) => t !== 'portfolio' && !t.startsWith('group_') && t !== 'sub_image') || 'All';
        
        portfolioGroups[groupTag].mainImage = img;
        portfolioGroups[groupTag].category = categoryTag;
      }
    });

    // If there are legacy images (no group tags), return them so the portfolio doesn't look empty!
    if (results.resources.length > 0 && Object.keys(portfolioGroups).length === 0) {
      const legacyData = results.resources.map((img: any, index: number) => {
        const categoryTag = img.tags?.find((tag: string) => tag !== 'portfolio') || 'All';
        return {
          id: img.asset_id || index,
          title: img.context?.alt || img.filename || 'Makeover Anj',
          category: categoryTag,
          image: img.secure_url,
          subImages: [],
          link: img.context?.caption || '',
        };
      });
      return NextResponse.json(legacyData);
    }

    // Format the groups into the final array
    const formattedData = Object.values(portfolioGroups)
      .filter((group) => group.mainImage) // Only include groups that have a main image
      .map((group) => {
        const img = group.mainImage;
        return {
          id: img.asset_id,
          title: img.context?.alt || 'Makeover Anj',
          category: group.category,
          image: img.secure_url,
          subImages: group.subImages,
          link: img.context?.caption || '',
          order: img.context?.order || '',
        };
      });

    // Sort by order priority first, then created_at of main image (newest first)
    if (formattedData.length > 0) {
      formattedData.sort((a, b) => {
        const orderA = a.order ? parseInt(a.order, 10) : Infinity;
        const orderB = b.order ? parseInt(b.order, 10) : Infinity;

        if (orderA !== orderB) {
          return orderA - orderB; // Lower numbers come first
        }

        // If order is the same (or both have no order), sort by date
        const timeA = new Date(portfolioGroups[Object.keys(portfolioGroups).find(k => portfolioGroups[k].mainImage?.asset_id === a.id)!].mainImage.created_at).getTime();
        const timeB = new Date(portfolioGroups[Object.keys(portfolioGroups).find(k => portfolioGroups[k].mainImage?.asset_id === b.id)!].mainImage.created_at).getTime();
        return timeB - timeA;
      });
    }

    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.error('Cloudinary API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio images', details: error.message || String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
