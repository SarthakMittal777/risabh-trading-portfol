import { useParams } from "react-router-dom";
import { Footer, Navbar, ServicesDetails } from "../components";
import { Helmet } from "react-helmet-async";
import { services } from "../data";

const Services = () => {
  const { slug } = useParams();

  const service = services.find((service) => service.slug === slug);

  return (
    <>
      <Helmet>
        <title>{service.name} | Mortal Trading</title>
        <meta name="description" content={service.description} />
        <meta name="image" content={service.image} />
        <meta name="keywords" content={service.keywords} />

        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content={`${service.name} | Mortal Trading`}
        />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.image} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mortal Trading" />

        <meta
          name="twitter:title"
          content={`${service.name} | Mortal Trading`}
        />
        <meta name="twitter:description" content={service.description} />
        <meta name="twitter:image" content={service.image} />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href={`https://mortaltrading.com/services/${service.slug}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            image: service.image,
            url: window.location.href,
          })}
        </script>
      </Helmet>
      <Navbar />

      <main className="text-gray-300 p-6">
        <ServicesDetails service={service} />
      </main>

      <Footer />
    </>
  );
};

export default Services;
