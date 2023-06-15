import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [bookingProduct, setBookingProduct] = useState(null);
  const AllProducts = useLoaderData();

  return (
    <div className="my-16">
      {AllProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          {" "}
          No Products Available
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20">
          {AllProducts?.map((product) => (
            <ProductCard
              key={product?._id}
              product={product}
              setBookingProduct={setBookingProduct}
            ></ProductCard>
          ))}
        </div>
      )}
      {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default AllProducts;
