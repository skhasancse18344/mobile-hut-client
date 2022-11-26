import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const AllProducts = useLoaderData();

  console.log(AllProducts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20">
      {AllProducts?.map((product) => (
        <ProductCard key={product?._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default AllProducts;
