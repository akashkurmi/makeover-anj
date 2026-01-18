import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-serif italic mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm tracking-widest uppercase text-gray-400">
            <div>
              <p className="text-white mb-2">Location</p>
              <p>Bangalore, India</p>
            </div>
            <div>
              <p className="text-white mb-2">Email</p>
              <p>anjaligour761@gmail.com</p>
            </div>
            <div>
              <p className="text-white mb-2">Phone</p>
              <p>+91 78794 58655</p>
            </div>
          </div>
          <p className="mt-16 text-[10px] text-zinc-600 tracking-[0.5em]">
            © 2026 ANJALI MAKEOVER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
