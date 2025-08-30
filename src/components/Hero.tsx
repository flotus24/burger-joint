const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-[100vh] relative">
        <video
          src="/videos/grilling-video.webm"
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
