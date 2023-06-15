import React from "react";
import image from "../../assets/banner-Image.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-green-700">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense">
          <img src={image} className=" rounded-lg shadow-2xl" alt="" />
          <div className="text-white">
            <h1 className="text-4xl font-bold">
              World Number One Mobile Resale Platform
            </h1>
            <p className="py-6">
              Welcome To Mobile Hut,We Only Provide Best And Authentic Used
              Mobile.
            </p>
<<<<<<< HEAD
            <div className="w-full flex   mt-6">
              <button className="btn btn-primary mx-auto text-white">
                Get Started
              </button>
            </div>
=======
            <button className="btn btn-primary text-white">Get Started</button>
>>>>>>> 94971d787d75595e1410d15142f5b86fd235819b
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
