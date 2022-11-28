import React from "react";
import image from "../../assets/banner-Image.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-green-400 ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense">
          <img src={image} className=" rounded-lg shadow-2xl" alt="" />
          <div className="text-white">
            <h1 className="text-5xl font-bold">Sell/Buy Best Used Mobile</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
