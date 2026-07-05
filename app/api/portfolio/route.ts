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

    const portfolioGroups: Record<string, { mainImages: any[], subImages: string[] }> = {};
    const formattedData: any[] = [];

    results.resources.forEach((img: any) => {
      // Find the group tag (starts with 'group_')
      const groupTag = img.tags?.find((t: string) => t.startsWith('group_'));
      if (!groupTag) return; // Ignore if no group tag

      if (!portfolioGroups[groupTag]) {
        portfolioGroups[groupTag] = { mainImages: [], subImages: [] };
      }

      // Check if it's a sub-image
      if (img.tags?.includes('sub_image')) {
        portfolioGroups[groupTag].subImages.push(img.secure_url);
      } else {
        // It's a main image!
        const categoryTag = img.tags?.find((t: string) => t !== 'portfolio' && !t.startsWith('group_') && t !== 'sub_image') || 'All';
        portfolioGroups[groupTag].mainImages.push({
          img,
          category: categoryTag
        });
      }
    });

    // Format the groups into the final array
    Object.keys(portfolioGroups).forEach(groupTag => {
      const group = portfolioGroups[groupTag];
      
      // Each main image in the group becomes its own portfolio item
      group.mainImages.forEach((main) => {
        const img = main.img;
        formattedData.push({
          id: img.asset_id,
          title: img.context?.alt || 'Makeover Anj',
          category: main.category,
          image: img.secure_url,
          subImages: group.subImages,
          link: img.context?.caption || '',
          order: img.context?.order || '',
          createdAt: img.created_at, // Store for sorting
        });
      });
    });

    // Sort by order priority first, then created_at (newest first)
    if (formattedData.length > 0) {
      formattedData.sort((a, b) => {
        const orderA = a.order ? parseInt(a.order, 10) : Infinity;
        const orderB = b.order ? parseInt(b.order, 10) : Infinity;

        if (orderA !== orderB) {
          return orderA - orderB; // Lower numbers come first
        }

        // If order is the same, sort by date
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }

    // Clean up temporary createdAt before sending response
    const finalData = formattedData.map(({ createdAt, ...rest }) => rest);
    return NextResponse.json(finalData);
  } catch (error: any) {
    console.error('Cloudinary API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio images', details: error.message || String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
