// components/ProductCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  item: any;
  onOpenLightbox: (item: any) => void;
}
const InstagramIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function ProductCard({ item, onOpenLightbox }: ProductCardProps) {
  return (
    <div className="relative group overflow-hidden bg-[#1E1813] border border-[#3D342B]/50 hover:border-[#C4A16A]/60 aspect-[9/16] transition-all duration-500">
      {/* Main Image Click Area */}
      <div
        onClick={() => onOpenLightbox(item)}
        className="block w-full h-full cursor-pointer"
      >
        <Image
          src={item.imageUrl}
          alt={item.alt || item.name || ""}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority={item.id < 5}
        />

        {/* Updated Hover Overlay with Price */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/85 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-[#F2EDE5] text-[10px] uppercase tracking-[0.25em] drop-shadow-md mb-1 font-sans">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Social Link */}
      {item.instaLink && (
        <Link
          href={item.instaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 z-20 p-2 bg-[#120F0C]/75 backdrop-blur-md rounded-full text-[#A69C91] hover:text-[#120F0C] hover:bg-[#C4A16A] transition-all duration-300 transform md:translate-y-[-10px] md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <InstagramIcon size={16} />
        </Link>
      )}
    </div>
  );
}
export default ProductCard;
