import React from "react";

const Herosec = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1661940407330-18d3d0b3d1d9?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Build Your Future With Us
        </h1>

        <p className="text-lg md:text-2xl font-light max-w-2xl mb-6 drop-shadow">
          We provide smart digital solutions to grow your business efficiently and professionally.
        </p>

        <div className="flex gap-4 mt-2">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-md transition">
            Get Started
          </button>

          <button className="px-6 py-3 bg-white/20 hover:bg-white/30 border border-white rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
};

export default Herosec;
