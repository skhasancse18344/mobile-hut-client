import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import BookingCard from "./BookingCard";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["mybookings/:email"],
    queryFn: () =>
      fetch(`http://localhost:5000/mybookings/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">My Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20 ">
        {bookings.map((bookingProduct) => (
          <BookingCard
            key={bookingProduct?._id}
            bookingProduct={bookingProduct}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
