import React from "react";
import AdvertiseProducts from "../AdvertiseProducts/AdvertiseProducts";
import Banner from "../Banner/Banner";
// import Products from "../Products/Products";
import Categories from "./Categories/Categories";
import PeopleSays from "./PeopleSays";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Categories></Categories>
      <AdvertiseProducts></AdvertiseProducts>
      <PeopleSays></PeopleSays>
    </div>
  );
};

export default Home;
