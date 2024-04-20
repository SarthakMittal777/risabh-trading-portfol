import { aboutUs } from "../assets";

const HomeAboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-4 px-4 py-6 bg-primary w-full">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-5xl font-bold font-kalnia text-white">About Us</h2>
        <p className="text-gray-300">
          Welcome to Mortal Trader, your trusted partner in the world of trading
          and investment. Founded with a vision to empower individuals with the
          knowledge and tools to navigate the financial markets, we are
          committed to delivering exceptional value to our client. We have a
          team of experts that will guide you through the process of trading. We
          have a team of experts that will guide you through the process of
          trading. We have a team of experts that will guide you through the
          process of trading.
        </p>
        <p>
          Whether you are a beginner looking to take your first steps in trading
          or an experienced investor seeking to refine your strategies, Mortal
          Trader is here to guide you every step of the way. With our
          user-friendly platforms, educational materials, and expert insights,
          we aim to make your trading journey as smooth and rewarding as
          possible. Join us today and discover the Mortal Trader difference.
          Together, we can unlock the potential of the financial markets and
          build a brighter financial future.
        </p>
      </div>
      <div className="mx-auto">
        <img src={aboutUs} alt="About Us" />
      </div>
    </section>
  );
};

export default HomeAboutUs;
