import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Categories></Categories>
      <Products></Products>
    </div>
  );
};

export default Home;
