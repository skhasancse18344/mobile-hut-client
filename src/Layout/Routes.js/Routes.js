import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../../components/AllProducts/AllProducts";
import Blog from "../../components/Blog/Blog";
import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../Main/Main";

const router = createBrowserRouter([
  {
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
        element: <AllProducts></AllProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params?.id}`),
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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
export default router;
