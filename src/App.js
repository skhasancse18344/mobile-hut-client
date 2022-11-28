import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "./Layout/Routes.js/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-4/5 mx-auto ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
