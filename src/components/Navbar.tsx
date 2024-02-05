const Navbar = () => {
  return (
    <nav className="flex flex-row items-center">
      <div className="container flex flex-col mx-auto space-y-1">
        <div className="flex flex-row items-center w-full pt-3">
          <p className="text-sm">Some announcement</p>
        </div>
        <div className="flex flex-row items-center w-full border-t-2 pt-3 pb-2">
          <h1 className=" text-2xl font-bold cursor-pointer text-black">AM</h1>
          <div className="ms-10 hidden md:flex  flex-row items-center space-x-5 me-10 text-black">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>
          <button className="hidden md:block ms-auto bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Sign Up</button>
          <button className="block md:hidden ms-auto bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Menu</button>
        </div>
        <div className="flex flex-row items-center w-full py-2 space-x-5 border-t-2">
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
