"use client";

import ImageUpload from "@/app/Page/comp/ImageUpload";
import { useState, useEffect } from "react";

const categories = ["Bridal", "Fashion", "Party", "All"];

export default function AdminUploadPage() {
  const [category, setCategory] = useState("Bridal");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [order, setOrder] = useState("");
  const [groupId, setGroupId] = useState("");

  // These "stable" states will only update after the user stops typing
  // This prevents the ImageUpload component from remounting on every keystroke
  const [stableTitle, setStableTitle] = useState("");
  const [stableLink, setStableLink] = useState("");
  const [stableOrder, setStableOrder] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStableTitle(title);
      setStableLink(link);
      setStableOrder(order);
    }, 500); // Wait 500ms after typing stops
    return () => clearTimeout(timer);
  }, [title, link, order]);

  // Generate a unique group ID whenever the page loads or they start a new item
  useEffect(() => {
    setGroupId(`group_${Date.now()}`);
  }, []);

  const handleNewItem = () => {
    setTitle("");
    setLink("");
    setOrder("");
    setGroupId(`group_${Date.now()}`);
    alert("Started a new portfolio item! You can now upload a new main image.");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-pink-500">Portfolio Image Upload</h1>
        <p className="text-gray-400 mb-8">
          Upload a main image, attach a title/link, and optionally add multiple sub-images!
        </p>
        
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Portfolio Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Stunning Bridal Makeup"
              className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Instagram Link</label>
            <input 
              type="text" 
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="e.g. https://instagram.com/p/..."
              className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Order Priority (Optional)</label>
            <input 
              type="number" 
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              placeholder="e.g. 1 (to show first)"
              className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-pink-500 transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {groupId && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-dashed border-gray-700 rounded-xl p-8 bg-gray-950 mb-6">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-white font-medium mb-2">Step 1: Main Image</h3>
              <p className="text-xs text-gray-400 mb-4">Upload the primary cover image first.</p>
              <ImageUpload 
                category={category} 
                groupId={groupId} 
                title={stableTitle} 
                link={stableLink} 
                order={stableOrder}
                isSubImage={false} 
              />
            </div>
            
            <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-gray-800 pt-6 md:pt-0 pl-0 md:pl-4">
              <h3 className="text-white font-medium mb-2">Step 2: Sub Images</h3>
              <p className="text-xs text-gray-400 mb-4">Select multiple images to attach to the main one.</p>
              <ImageUpload 
                category={category} 
                groupId={groupId} 
                isSubImage={true} 
                multiple={true} 
              />
            </div>
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button 
            onClick={handleNewItem}
            className="text-gray-400 hover:text-white underline text-sm transition-colors"
          >
            + Create another portfolio item
          </button>
        </div>
      </div>
    </div>
  );
}
