import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const BookingModal = ({ bookingProduct, setBookingProduct }) => {
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const booking = {
      sellerEmail: bookingProduct?.email,
      productName: form.productName.value,
      buyerName: form.buyerName.value,
      buyerEmail: user?.email,
      buyerMobileNumber: form.buyerMobileNumber.value,
      buyerLocation: form.buyerLocation.value,
      sellerName: bookingProduct?.sellerName,
      productPicture: bookingProduct?.productPicture,
      productPrice: bookingProduct?.resalePrice,
      bookingID: bookingProduct?._id,
    };

    fetch("https://mobile-hut-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setBookingProduct(null);
        toast.success("Booking Confirmed");
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{bookingProduct?.productName}</h3>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="productName"
              value={bookingProduct?.productName}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="text"
              name="buyerName"
              placeholder="Type here"
              value={user?.displayName}
              disabled
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="text"
              name="buyerLocation"
              placeholder="Buyer Location"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="text"
              name="buyerMobileNumber"
              placeholder="Buyer Mobile Number"
              className="input input-bordered w-full mt-4 "
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full mt-6"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
