import { useParams } from "react-router-dom";
import { Footer, Navbar, ServicesDetails } from "../components";
import { services } from "../data";

const Services = () => {
  const { slug } = useParams();

  const service = services.find((service) => service.slug === slug);

  return (
    <>
      <Navbar />

      <main className="text-gray-300 p-6">
        <ServicesDetails service={service} />
      </main>

      <Footer />
    </>
  );
};

export default Services;
