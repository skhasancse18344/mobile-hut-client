import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });
  const categoryhandle = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit(categoryhandle)}>
        <span className="font-bold text-lg">User Category : </span>{" "}
        <select
          {...register("value", { required: true })}
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
