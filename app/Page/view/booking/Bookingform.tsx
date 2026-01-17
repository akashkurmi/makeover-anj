const Bookingform = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-4">
            Reserve Your Date
          </h2>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
            Book your transformation session
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
              Event Date
            </label>
            <input
              type="date"
              className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none"
            />
          </div>

          {/* Service Type */}
          <div className="flex flex-col space-y-2">
            <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
              Service Required
            </label>
            <select className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors">
              <option>Bridal Makeup</option>
              <option>Party/Event Look</option>
              <option>Editorial/Fashion</option>
              <option>Makeup Masterclass</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
              Additional Details
            </label>
            <textarea
              rows={4}
              placeholder="Tell us more about your event..."
              className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              className="w-full bg-white text-black py-4 uppercase font-bold tracking-[0.4em] text-xs hover:bg-pink-500 hover:text-white transition-all duration-500"
            >
              Send Booking Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Bookingform;
