const Categories = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10">Popular Products</h1>

        <div className="mx-auto flex flex-row justify-between flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((c, i) => (
            <div key={c + i} className="p-20 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
