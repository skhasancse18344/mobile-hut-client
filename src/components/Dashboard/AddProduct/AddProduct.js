import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });
  const categoryhandle = (data) => {
    console.log(data);
  };
  return (
    <div className="my-40">
      <h1 className="text-4xl font-bold text-center my-10">Add Product</h1>

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
              <span className="label-text">Product Condition</span>
            </label>

            <input
              type="text"
              {...register("product-condition", {})}
              placeholder="Product Condition"
              className="input input-bordered w-full "
            />
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
            {/* <input
              type="text"
              {...register("description", {})}
              placeholder="Product Description"
              className="input input-bordered w-full "
            /> */}
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>

          <input
            type="file"
            {...register("productPicture", {})}
            placeholder="Enter Your Name"
            className="input input-bordered w-full py-2 "
          />
        </div>
        <span className="font-bold text-lg">Product Category : </span>{" "}
        <select
          {...register("category_id", { required: true })}
          className="my-10 border p-2"
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
