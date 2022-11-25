import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      categoryName: "Samsung",
    },
    {
      id: 2,
      categoryName: "Symphony",
    },
    {
      id: 3,
      categoryName: "Nokia",
    },
    {
      id: 5,
      categoryName: "Motorolla",
    },
    {
      id: 6,
      categoryName: "Others....",
    },
  ];
  return (
    <div>
      <h1 className="text-xl mt-6 font-bold">Category :</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 ">
        {categories.map((category) => (
          <div key={category.id}>
            <button className="mt-6 rounded-lg px-20 py-6 bg-primary text-white font-bold">
              {category.categoryName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
