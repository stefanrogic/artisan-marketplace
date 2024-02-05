import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto py-6 px-4 xl:px-0 space-y-40"></div>
    </>
  );
}

export default App;
