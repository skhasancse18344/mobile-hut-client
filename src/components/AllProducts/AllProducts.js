import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [bookingProduct, setBookingProduct] = useState(null);
  const AllProducts = useLoaderData();

  console.log(AllProducts);
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20">
        {AllProducts?.map((product) => (
          <ProductCard
            key={product?._id}
            product={product}
            setBookingProduct={setBookingProduct}
          ></ProductCard>
        ))}
      </div>
      {bookingProduct && (
        <BookingModal bookingProduct={bookingProduct}></BookingModal>
      )}
    </div>
  );
};

export default AllProducts;
