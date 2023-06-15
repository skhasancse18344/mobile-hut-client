import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import BookingCard from "./BookingCard";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["mybookings/:email"],
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-hut-server.vercel.app/dashboard/mybookings/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        My <span className="text-emerald-600 ml-2">Orders</span>
      </h1>
      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          {" "}
          You Have No Orders
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20 ">
          {bookings.map((bookingProduct) => (
            <BookingCard
              key={bookingProduct?._id}
              bookingProduct={bookingProduct}
            ></BookingCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
