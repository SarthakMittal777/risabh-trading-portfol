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
