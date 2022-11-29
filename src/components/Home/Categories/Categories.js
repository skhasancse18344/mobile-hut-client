import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://mobile-hut-server.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-4xl my-20 font-bold text-center">
        {" "}
        <span className="text-emerald-600 mr-2">Select A Brand To</span>
        Order Your One :
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
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
