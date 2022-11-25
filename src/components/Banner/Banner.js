import React from "react";
import image from "../../assets/mobile_phones.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className=" rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Sell/Buy Best Used Mobile</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
