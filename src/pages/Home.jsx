import { Helmet } from "react-helmet-async";
import {
  Footer,
  HomeAboutUs,
  HomeBinarySection,
  HomeHeroSection,
  HomeServicesSection,
  HomeSocialSection,
  HomeWhyUs,
  Navbar,
} from "../components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mortal Trading</title>
        <meta
          name="description"
          content="Mortal Trading is a trading company that provides trading services to clients."
        />
        <meta
          name="image"
          content="https://mortaltrading.com/static/services/stock-market-consultancy.jpg"
        />
        <meta name="keywords" content="trading, stocks, forex, crypto" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Mortal Trading" />
        <meta
          property="og:description"
          content="Mortal Trading is a trading company that provides trading services to clients."
        />
        <meta
          property="og:image"
          content="https://mortaltrading.com/static/services/stock-market-consultancy.jpg"
        />
        <meta property="og:url" content="https://mortaltrading.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mortal Trading" />

        <meta name="twitter:title" content="Mortal Trading" />
        <meta
          name="twitter:description"
          content="Mortal Trading is a trading company that provides trading services to clients."
        />
        <meta
          name="twitter:image"
          content="https://mortaltrading.com/static/services/stock-market-consultancy.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://mortaltrading.com" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mortal Trading",
            description:
              "Mortal Trading is a trading company that provides trading services to clients.",
            image:
              "https://mortaltrading.com/static/services/stock-market-consultancy.jpg",
            url: "https://mortaltrading.com",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="text-gray-300">
        <HomeHeroSection />
        <HomeBinarySection />
        <HomeAboutUs />
        <HomeWhyUs />
        <HomeServicesSection />
        <HomeSocialSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
