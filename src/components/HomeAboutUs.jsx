import { aboutUs } from "../assets";

const HomeAboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-4 px-4 py-6 bg-primary w-full">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-5xl font-bold font-kalnia text-white">About Us</h2>
        <p className="text-gray-300">
          Mortal Trader - Empowering Your Financial Journey Join Mortal Trader,
          your trusted trading and investment partner. Our mission is to equip
          you with the knowledge and tools needed to confidently navigate the
          financial markets. Our team of experts is dedicated to guiding traders
          of all levels, from novices to seasoned investors.
        </p>
        <p>
          We offer user-friendly platforms, comprehensive educational materials,
          and expert insights to ensure a smooth and profitable trading
          experience. Embrace the Mortal Trader advantage and unlock your
          financial potential with us.
        </p>
      </div>
      <div className="mx-auto">
        <img src={aboutUs} alt="About Us" />
      </div>
    </section>
  );
};

export default HomeAboutUs;
