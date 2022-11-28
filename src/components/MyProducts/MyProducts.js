import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import MyProductCard from "./MyProductCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/myproduct/${user?.email}`;

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">My Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20">
        {myProducts?.map((myProduct) => (
          <MyProductCard
            key={myProduct?._id}
            myProduct={myProduct}
            refetch={refetch}
          ></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
