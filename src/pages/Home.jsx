import { Footer, HomeBinarySection, HomeHeroSection, HomeServicesSection, Navbar } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="text-gray-300">
        <HomeHeroSection />
        <HomeBinarySection />
        <HomeServicesSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
