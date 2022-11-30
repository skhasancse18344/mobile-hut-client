import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaCheckCircle, FaLocationArrow } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
// import { FaLocationArrow } from "react-icons/io";
// import { BallTriangle } from "react-loader-spinner";

const ProductCard = ({ product, setBookingProduct }) => {
  const { data: uservarified = [] } = useQuery({
    queryKey: ["usersVar", product?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-hut-server.vercel.app/usersVar/${product?.email}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  // if (isLoading) {
  //   <div className="flex flex-col items-center justify-center h-screen">
  //     <BallTriangle
  //       height={100}
  //       width={100}
  //       radius={5}
  //       color="#4fa94d"
  //       ariaLabel="ball-triangle-loading"
  //       wrapperClass={{}}
  //       wrapperStyle=""
  //       visible={true}
  //     />
  //   </div>;
  // }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={product?.productPicture} alt="" className=" h-60" />
        </figure>
        <div className="card-body">
          <h2 className=" text-xl text-center font-bold">
            {product?.productName}
          </h2>

          <div className="card-actions justify-between flex-col">
            <div className=" py-4 font-bold flex items-center">
              <FaLocationArrow className="text-2xl mr-2"></FaLocationArrow>
              {product?.sellerLocation}
            </div>
            <div className="flex items-center">
              <BsCalendarDate className="text-2xl mr-4"></BsCalendarDate>
              {product?.date}
            </div>
          </div>
          <h2 className="text-md font-bold flex items-center mt-4">
            <span className=" text-lime-700 ">Seller Name :</span>{" "}
            {product?.sellerName}{" "}
            {uservarified?.varification === "Varified" && (
              <span className="  ml-2 text-blue-700">
                <FaCheckCircle />
              </span>
            )}
          </h2>
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
