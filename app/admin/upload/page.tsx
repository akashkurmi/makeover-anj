"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Upload, Image as ImageIcon, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const categories = ["Bridal", "Fashion", "Party", "All"];

export default function AdminUploadPage() {
  const [category, setCategory] = useState("Bridal");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [order, setOrder] = useState("");
  
  // File States
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [subImages, setSubImages] = useState<File[]>([]);
  
  // UI States
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMainImage(e.target.files[0]);
    }
  };

  const handleSubImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSubImages(Array.from(e.target.files));
    }
  };

  const uploadToCloudinary = async (file: File, tags: string[], context: any = {}) => {
    const timestamp = Math.round(new Date().getTime() / 1000);
    
    // Prepare parameters for signature
    const paramsToSign: any = {
      timestamp,
      tags: tags.join(","),
      folder: "makeover-portfolio",
    };

    if (Object.keys(context).length > 0) {
      // Convert context object to a string "key=value|key2=value2"
      paramsToSign.context = Object.entries(context)
        .map(([k, v]) => `${k}=${v}`)
        .join("|");
    }

    // Get signature from our API
    const sigResponse = await fetch("/api/sign-image", {
      method: "POST",
      body: JSON.stringify({ paramsToSign }),
    });
    const { signature } = await sigResponse.json();

    // Prepare FormData for Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey!);
    formData.append("timestamp", timestamp.toString());
    formData.append("signature", signature);
    formData.append("tags", tags.join(","));
    formData.append("folder", "makeover-portfolio");
    if (paramsToSign.context) {
      formData.append("context", paramsToSign.context);
    }

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainImage) return alert("Please select a main image!");
    if (!title) return alert("Please provide a title!");

    setIsUploading(true);
    setIsSuccess(false);
    const groupId = `group_${Date.now()}`;

    try {
      // 1. Upload Main Image
      setUploadStatus("Uploading Main Image...");
      await uploadToCloudinary(
        mainImage, 
        ["portfolio", groupId, category], 
        { alt: title, caption: link, order: order }
      );

      // 2. Upload Sub Images (if any)
      if (subImages.length > 0) {
        for (let i = 0; i < subImages.length; i++) {
          setUploadStatus(`Uploading Sub-Image ${i + 1} of ${subImages.length}...`);
          await uploadToCloudinary(
            subImages[i], 
            ["portfolio", groupId, "sub_image"]
          );
        }
      }

      setUploadStatus("All images uploaded successfully!");
      setIsSuccess(true);
      
      // Clear files but keep metadata for a moment
      setMainImage(null);
      setSubImages([]);
      
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Check console for details.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setTitle("");
    setLink("");
    setOrder("");
    setMainImage(null);
    setSubImages([]);
    setIsSuccess(false);
    setUploadStatus("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/Page/Portfolio" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span className="text-xs uppercase tracking-widest font-medium">Back to Portfolio</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif italic text-pink-500">Portfolio Manager</h1>
          <div className="w-24 hidden md:block"></div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Metadata */}
          <div className="space-y-6 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 backdrop-blur-sm">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Project Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5 ml-1">Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Traditional Bridal Glow"
                  required
                  className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl p-3.5 outline-none focus:border-pink-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5 ml-1">Instagram Link</label>
                <input 
                  type="url" 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://instagram.com/p/..."
                  className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl p-3.5 outline-none focus:border-pink-500 transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5 ml-1">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl p-3.5 outline-none focus:border-pink-500 transition-all text-sm appearance-none cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5 ml-1">Priority (Order)</label>
                  <input 
                    type="number" 
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    placeholder="e.g. 1"
                    className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl p-3.5 outline-none focus:border-pink-500 transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Images */}
          <div className="space-y-6">
            {/* Main Image Selector */}
            <div className={`relative group border-2 border-dashed transition-all rounded-2xl p-8 flex flex-col items-center justify-center text-center ${mainImage ? 'border-pink-500/50 bg-pink-500/5' : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/30'}`}>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleMainImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="relative z-0">
                {mainImage ? (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-3">
                      <ImageIcon className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium text-white mb-1">Main Image Selected</p>
                    <p className="text-[10px] text-zinc-500 truncate max-w-[200px]">{mainImage.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                      <Upload className="text-zinc-500" size={24} />
                    </div>
                    <p className="text-sm font-medium text-white mb-1">Select Main Image</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">JPG, PNG, WEBP (Max 10MB)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sub-Images Selector */}
            <div className={`relative group border-2 border-dashed transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center ${subImages.length > 0 ? 'border-zinc-500/50 bg-white/5' : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/30'}`}>
              <input 
                type="file" 
                multiple
                accept="image/*"
                onChange={handleSubImagesChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <Upload className="text-zinc-400" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">Add Sub-Images (Optional)</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    {subImages.length > 0 ? `${subImages.length} files selected` : 'Select multiple files'}
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isUploading || !mainImage || !title}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl flex items-center justify-center gap-3 ${
                isUploading 
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-pink-500 hover:text-white active:scale-[0.98]'
              }`}
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>{uploadStatus}</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} />
                  <span>Publish to Portfolio</span>
                </>
              )}
            </button>

            {isSuccess && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center animate-in fade-in slide-in-from-top-2 duration-500">
                <p className="text-green-500 text-sm font-medium mb-2">Portfolio successfully updated!</p>
                <button 
                  type="button"
                  onClick={handleReset}
                  className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white underline"
                >
                  Clear and upload another
                </button>
              </div>
            )}
          </div>
        </form>

        <footer className="mt-20 pt-10 border-t border-zinc-900 text-center">
          <p className="text-[9px] uppercase tracking-[0.8em] text-zinc-600">Makeover Anj Management System</p>
        </footer>
      </div>
    </div>
  );
}
