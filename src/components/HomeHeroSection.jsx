import { heroSectionTradingVideo } from "../assets";

const HomeHeroSection = () => {
  return (
    <section className="relative w-full h-dvh bg-black/50">
      <video
        playsInline
        autoPlay
        muted
        loop
        className="absolute w-full h-dvh object-center object-cover -z-10"
      >
        <source src={heroSectionTradingVideo} type="video/mp4" />
      </video>
      <div className="w-full h-dvh flex justify-center items-center">
        <div className="w-full md:w-3/5 text-center space-y-2 m-2">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-kalnia">
            TRADING MADE SIMPLE
          </h2>
          <p className="text-xl md:text-2xl">
            Short-term contracts for fast-paced trading
            <br /> make market volatility work for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
