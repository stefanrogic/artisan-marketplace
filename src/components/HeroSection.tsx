import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="h-screen bg-gray-800 bg-[url('/public/images/business-2626052.jpg')] bg-cover">
      <Navbar />
      <div className="container mx-auto py-6 px-4 xl:px-0 space-y-10 mt-72 flex flex-col justify-center items-center">
        <h1 className="text-white text-7xl font-bold text-center">Artisan Marketplace</h1>
        <div className="flex flex-row space-x-5">
          <button className=" bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Shop</button>
          <button className=" bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
