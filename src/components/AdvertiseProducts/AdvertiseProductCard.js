import React from "react";

const AdvertiseProductCard = ({ product }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={product?.productPicture} alt="" className=" h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {product?.productName}</h2>
        </div>
        <div className="my-6 ">
          <span className="  pl-8  font-bold text-lime-700">
            Product Price:
          </span>{" "}
          {product?.resalePrice}
        </div>
        <div className="px-8 pb-8">
          <span className="  font-bold text-lime-700">
            Product Description:
          </span>{" "}
          {product?.description}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseProductCard;
