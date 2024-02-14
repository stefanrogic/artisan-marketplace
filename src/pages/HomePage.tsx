import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="space-y-20">
        <HeroSection />
        <Categories />
      </div>
    </>
  );
};

export default HomePage;
