import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });
  return (
    <div>
      <h1 className="text-xl mt-6 font-bold">Category :</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 ">
        {categories?.map((category) => (
          <div key={category?._id}>
            <Link to={`/category/${category?._id}`}>
              <button className="mt-6 rounded-lg px-20 py-6 bg-primary text-white font-bold">
                {category?.brand}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
