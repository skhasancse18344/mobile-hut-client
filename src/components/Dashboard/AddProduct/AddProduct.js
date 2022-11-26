import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imagehostkey = process.env.REACT_APP_imgbb_key;

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });
  const categoryhandle = (data) => {
    // console.log(data);
    const image = data.productPicture[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData?.success) {
          const product = {
            sellerName: data.sellerName,
            email: user?.email,
            productName: data.productName,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            yearsOfUse: data.yearsOfUse,
            productCondition: data.productCondition,
            sellerMobileNumber: data.sellerMobileNumber,
            description: data.description,
            categoryId: data.categoryId,
            sellerLocation: data.sellerLocation,
            date: data.productPicture[0].lastModifiedDate,
            productPicture: imageData?.data?.url,
          };

          //Save Product to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("One Product Added Successfully");
            });
        }
      });
  };
  return (
    <div className="my-40">
      <h1 className="text-4xl font-bold text-center my-10 mt-96 md:mt-10 lg:mt-10 ">
        Add Product
      </h1>

      <form onSubmit={handleSubmit(categoryhandle)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>

            <input
              type="text"
              {...register("sellerName", {})}
              placeholder="Enter Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>

            <input
              type="text"
              {...register("productName", {})}
              placeholder="Enter Product Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Original Price</span>
            </label>

            <input
              type="text"
              {...register("originalPrice", {})}
              placeholder="Enter Original price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>

            <input
              type="text"
              {...register("resalePrice", {})}
              placeholder="Selling Price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Years of Use</span>
            </label>

            <input
              type="text"
              {...register("yearsOfUse", {})}
              placeholder="Using"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Seller Location</span>
            </label>

            <input
              type="text"
              {...register("sellerLocation", {})}
              placeholder="Location"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Condition</span>
            </label>

            <input
              type="text"
              {...register("productCondition", {})}
              placeholder="Product Condition"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>

            <input
              type="text"
              {...register("sellerMobileNumber", {})}
              placeholder="Product Condition"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Prodcut Description</span>
          </label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Product Description"
            className="input input-bordered w-full "
            {...register("description", {})}
          ></textarea>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>

          <input
            type="file"
            {...register("productPicture", {
              required: "Photo is Required",
            })}
            placeholder="Enter Your Name"
            className="input input-bordered w-full py-2 "
          />
        </div>
        <span className="font-bold text-lg">Product Category : </span>{" "}
        <select
          {...register("categoryId", { required: true })}
          className="my-10 border p-2 w-1/2 border-lime-800 rounded-lg"
        >
          {categories.map((category) => (
            <option key={category._id} value={category?._id}>
              {category?.brand}
            </option>
          ))}
        </select>
        <br />
        <input className="btn btn-accent w-full mt-6" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
