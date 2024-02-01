const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex flex-row items-center  mb-10">
      <h1 className=" text-2xl font-bold cursor-pointer text-white">AM</h1>
      <div className="ms-10 hidden md:flex  flex-row items-center space-x-5 me-10 text-white">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
      <button className="hidden md:block ms-auto bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Sign Up</button>
      <button className="block md:hidden ms-auto bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Menu</button>
    </nav>
  );
};

export default Navbar;
