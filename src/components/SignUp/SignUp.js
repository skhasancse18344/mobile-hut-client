import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignup = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        toast("User Created Succesfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.email, data.name, data.userType);
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (email, name, userType) => {
    const user = {
      email,
      name,
      userType,
      varification: "Unvarified",
      role: "adminRemoved",
    };
    fetch("https://mobile-hut-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Save User", data);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-3xl p-10 font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>

            <input
              type="text"
              {...register("name", {
                required: "Email Address is required",
              })}
              placeholder="Enter Your Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="Enter Your Email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600 my-6">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer",
                },
              })}
              placeholder="Enter Your Password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600 my-6">{errors.password?.message}</p>
            )}
          </div>
          <span className="font-bold text-lg">User Category : </span>{" "}
          <select
            {...register("userType", { required: true })}
            className="my-10 border p-2"
          >
            <option value="">Select...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <br />
          <input
            className="btn btn-accent w-full mt-6"
            type="submit"
            value="Submit"
          />
          <p className="my-6">
            If you already have an accout{" "}
            <Link to={"/login"} className="text-lime-600">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
