import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
// import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: userRole = [] } = useQuery({
    queryKey: ["option"],
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-hut-server.vercel.app/allusers/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full bg-base-100 text-base-content">
            {userRole?.userType === "buyer" &&
              userRole?.role === "adminRemoved" && (
                <>
                  <h1 className="text-2xl font-bold text-center my-6 text-green-800">
                    Buyer:
                  </h1>
                  <li>
                    <Link to={"/dashboard/mybookings"}> My Bookings</Link>
                  </li>
                </>
              )}
            {userRole?.userType === "seller" &&
              userRole?.role === "adminRemoved" && (
                <>
                  <h1 className="text-2xl font-bold text-center my-6 text-green-800">
                    Seller:
                  </h1>
                  <li>
                    <Link to={"/dashboard/addproduct"}>Add Product</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/myproducts"}> My Products</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/mybookings"}> My Bookings</Link>
                  </li>
                </>
              )}
            {userRole?.role === "admin" && (
              <>
                <h1 className="text-2xl font-bold text-center my-6 text-green-800">
                  Admin:
                </h1>

                <li>
                  <Link to={"/dashboard/allusers"}>All Seller</Link>
                </li>
                <li>
                  <Link to={"/dashboard/allbuyer"}>All Buyer</Link>
                </li>
                <li>
                  <Link to={"/dashboard/mybookings"}> My Bookings</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
