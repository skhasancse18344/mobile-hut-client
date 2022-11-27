import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProductCard = ({ product, setBookingProduct }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product?.productPicture} alt="" className=" h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.productName}</h2>
          <h2 className="card-title">
            <span className=" text-lime-700">Seller Name :</span>{" "}
            {product?.sellerName}{" "}
            <span className="  text-blue-700">
              <FaCheckCircle />
            </span>
          </h2>

          <div className="card-actions justify-between flex-col">
            <div>
              <span className=" py-4 font-bold text-lime-700">Location:</span>{" "}
              {product?.sellerLocation}
            </div>
            <div>
              <span className=" py-4 font-bold text-lime-700">Posted on:</span>{" "}
              {product?.date.substr(0, 10)}
            </div>
          </div>
          <div className="card-actions justify-between flex-col">
            <div>
              <span className=" py-4 font-bold text-lime-700">
                Original Price:
              </span>{" "}
              {product?.originalPrice} TK
            </div>
            <div>
              <span className=" py-4 font-bold text-lime-700">
                Resale Price:
              </span>{" "}
              {product?.resalePrice}
            </div>
          </div>
          <div className="card-actions justify-between flex-col">
            <div>
              <span className=" py-4 font-bold text-lime-700">
                Original Price:
              </span>{" "}
              {product?.originalPrice} TK
            </div>
            <div>
              <span className=" py-4 font-bold text-lime-700">
                Resale Price:
              </span>{" "}
              {product?.resalePrice}
            </div>
            <div>
              <span className=" py-4 font-bold text-lime-700">Usage:</span>{" "}
              {product?.yearsOfUse} Years
            </div>
          </div>
        </div>
        <label
          onClick={() => setBookingProduct(product)}
          htmlFor="booking-modal"
          className="btn width-full bg-slate-900 py-4 text-white font-bold"
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default ProductCard;
