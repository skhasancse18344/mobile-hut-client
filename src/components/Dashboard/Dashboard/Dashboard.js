import React from "react";
// import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full bg-base-100 text-base-content">
            <li>
              <Link to={"/dashboard/addproduct"}>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
