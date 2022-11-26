import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const AllProducts = useLoaderData();

  console.log(AllProducts);
  return (
    <div>
      {AllProducts?.map((product) => (
        <ProductCard key={product?._id}></ProductCard>
      ))}
    </div>
  );
};

export default AllProducts;
