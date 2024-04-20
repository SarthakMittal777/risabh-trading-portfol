import { whyUs } from "../data";
import HomeWhyUsCard from "./HomeWhyUsCard";

const HomeWhyUs = () => {
  return (
    <section className="px-4 py-6 text-center mx-auto space-y-6">
      <h2 className="text-5xl font-bold font-kalnia text-primary">Why Us?</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-around">
        {whyUs.map((data, key) => (
          <HomeWhyUsCard key={key} data={data} bullet={key + 1} />
        ))}
      </div>
    </section>
  );
};

export default HomeWhyUs;
