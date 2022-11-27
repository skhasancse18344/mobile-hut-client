import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../Contexts/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        // console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const userType = "buyer";
        saveUser(user?.email, user?.displayName, userType);
        // console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const saveUser = (email, name, userType) => {
    const user = { email, name, userType };
    fetch("http://localhost:5000/users", {
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
        <h2 className="text-3xl p-10 font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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

          <br />

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Submit"
          />
          <p className="my-6">
            New to Mobile Hunt{" "}
            <Link to={"/signup"} className="text-lime-600">
              Create New Account
            </Link>
          </p>

          <div className="divider">OR</div>
          <button
            className="btn btn-outline w-full"
            onClick={handleGoogleSingIn}
          >
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
