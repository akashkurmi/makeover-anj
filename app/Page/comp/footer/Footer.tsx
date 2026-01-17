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
              <p>Mumbai, India</p>
            </div>
            <div>
              <p className="text-white mb-2">Email</p>
              <p>hello@makeoveranj.com</p>
            </div>
            <div>
              <p className="text-white mb-2">Phone</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <p className="mt-16 text-[10px] text-zinc-600 tracking-[0.5em]">
            © 2024 MAKEOVER ANJ. ALL RIGHTS RESERVED.
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
