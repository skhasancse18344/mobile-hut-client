import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../../components/AllProducts/AllProducts";
import Blog from "../../components/Blog/Blog";
import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import MyBookings from "../../components/MyBookings/MyBookings";
import MyProducts from "../../components/MyProducts/MyProducts";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params?.id}`),
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
export default router;
