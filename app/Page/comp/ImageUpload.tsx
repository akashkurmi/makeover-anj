"use client";

import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  onUploadSuccess?: (url: string) => void;
  category?: string;
  groupId: string;
  isSubImage?: boolean;
  title?: string;
  link?: string;
  order?: string;
  multiple?: boolean;
}

export default function ImageUpload({ 
  onUploadSuccess, 
  category = "All",
  groupId,
  isSubImage = false,
  title = "",
  link = "",
  order = "",
  multiple = false
}: ImageUploadProps) {
  
  // Base tags: all images need the portfolio tag and their unique group ID
  const tagsToApply = ["portfolio", groupId];
  
  // Add specific tags based on whether it's a main image or sub image
  if (isSubImage) {
    tagsToApply.push("sub_image");
  } else {
    // The main image gets the category tag
    tagsToApply.push(category);
  }

  return (
    <CldUploadWidget 
      key={`${groupId}-${title}-${link}-${order}-${category}`}
      signatureEndpoint="/api/sign-image"
      options={{
        folder: "makeover-portfolio",
        clientAllowedFormats: ["png", "jpeg", "webp", "jpg"],
        maxImageWidth: 2000, 
        maxImageHeight: 2000,
        tags: tagsToApply,
        multiple: multiple,
        // Only attach context (title/link/order) to the Main Image
        // We use alt and caption because Cloudinary standardizes them
        context: isSubImage ? {} : { alt: title, caption: link, order: order }
      }}
      onSuccess={(result: any) => {
        const imageUrl = result.info.secure_url;
        console.log("Upload Success! Image URL:", imageUrl);
        
        if (onUploadSuccess) {
          onUploadSuccess(imageUrl);
        } else {
          alert(`${isSubImage ? 'Sub-Image' : 'Main Image'} uploaded successfully!`);
        }
      }}
    >
      {({ open }) => {
        return (
          <button 
            type="button"
            className={`font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ${
              isSubImage 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-pink-600 hover:bg-pink-700 text-white'
            }`}
            onClick={() => {
              if (!isSubImage && (!title || !link)) {
                alert("Please provide a Title and Instagram Link before uploading the Main Image.");
                return;
              }
              open();
            }}
          >
            {isSubImage ? 'Upload Sub-Images (Select Multiple)' : `Upload Main Image (${category})`}
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
