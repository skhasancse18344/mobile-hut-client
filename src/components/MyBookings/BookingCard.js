import React from "react";

const BookingCard = ({ bookingProduct }) => {
  const {
    productName,
    // buyerName,
    // buyerEmail,
    // buyerMobileNumber,
    // buyerLocation,
    // sellerName,
    productPicture,
    productPrice,
  } = bookingProduct;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={productPicture} alt="" className=" h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
        </div>
        <div className="my-6 ">
          <span className="  pl-8  font-bold text-lime-700">
            Product Price:
          </span>{" "}
          {productPrice}
        </div>
        <label className="btn width-full bg-slate-900 py-4 text-white font-bold">
          Make Payment
        </label>
      </div>
    </div>
  );
};

export default BookingCard;
