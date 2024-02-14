const Navbar = () => {
  return (
    <nav className="flex flex-row items-center">
      <div className="flex flex-col space-y-1 w-full">
        <div className="w-full py-2 bg-gray-600 text-white">
          <div className="container mx-auto flex flex-row items-center ">
            <p className="text-sm">Some announcement</p>
            <a className="ms-auto" href="#">
              Sign In
            </a>
            <a className="ms-5" href="#">
              Notifications
            </a>
            <a className="ms-5" href="#">
              Cart
            </a>
          </div>
        </div>
        <div className="w-full py-2">
          <div className="container mx-auto flex flex-row items-center ">
            <h1 className=" text-2xl font-bold cursor-pointer text-black">AM</h1>
            <div className="ms-10 hidden md:flex w-full flex-row items-center space-x-5 me-10 text-black">
              <input className="border w-full py-1" type="text" />
            </div>
            <button className="hidden md:block bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Search</button>
            <button className="block md:hidden ms-auto bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2">Menu</button>
          </div>
        </div>
        <div className="w-full pb-3">
          <div className="container mx-auto flex flex-row justify-center items-center w-full space-x-5 text-lg">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
