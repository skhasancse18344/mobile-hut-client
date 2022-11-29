import React from "react";
import toast from "react-hot-toast";

const MyProductCard = ({ myProduct, refetch }) => {
  const handleProductDelete = (id) => {
    fetch(`https://mobile-hut-server.vercel.app/myproduct/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        refetch();
      });
  };
  const handleDelete = (id) => {
    fetch(`https://mobile-hut-server.vercel.app/myBookingDelete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Deleted Successfully");
        refetch();
      });
  };
  const handleProductAdvertise = (id) => {
    fetch(`https://mobile-hut-server.vercel.app/advertiseproduct/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("This Product On Advertise");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={myProduct.productPicture} alt="" className=" h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{myProduct?.productName}</h2>
        </div>
        <div className="my-6 ">
          <span className="  pl-8  font-bold text-lime-700">
            Product Price:
          </span>{" "}
          {myProduct?.resalePrice}
        </div>
        <div className="mx-auto">
          <label
            onClick={() => handleProductAdvertise(myProduct?._id)}
            className="btn w-26 m-6 text-white font-bold btn-sm bg-sky-600"
          >
            Advertise
          </label>
          <label
            onClick={() => handleProductDelete(myProduct?._id)}
            className="btn w-26 m-6 text-white font-bold bg-red-800 btn-sm"
          >
            <button onClick={() => handleDelete(myProduct?._id)}>Delete</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
