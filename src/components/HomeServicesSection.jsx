import HomeServicesSectionCard from "./HomeServicesSectionCard";
import { services } from "../data";

const HomeServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-primary px-4 py-6 mx-auto text-center space-y-6"
    >
      <h2 className="text-5xl font-bold font-kalnia text-white">Services</h2>
      <div className="flex justify-around items-start gap-6 flex-wrap">
        {services.map((service, key) => (
          <HomeServicesSectionCard key={key} service={service} />
        ))}
      </div>
    </section>
  );
};

export default HomeServicesSection;
