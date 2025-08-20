import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-[100vh] relative">
        <video
          src="/videos/grilling.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
