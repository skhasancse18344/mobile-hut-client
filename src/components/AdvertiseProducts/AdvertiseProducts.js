import { useQuery } from "@tanstack/react-query";
import React from "react";
import bgimage from "../../assets/mobile_phones.jpg";
import AdvertiseProductCard from "./AdvertiseProductCard";

const AdvertiseProducts = () => {
  const { data: advertisePrudct = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(
        "https://mobile-hut-server.vercel.app/advertisePrudct"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {advertisePrudct?.length === 0 ? (
        <></>
      ) : (
        <div>
          {" "}
<<<<<<< HEAD
          <h1 className="text-4xl text-center font-bold my-20 py-8 text-white  bg-slate-900">
=======
          <h1
            className="text-4xl text-center font-bold my-20 py-16 text-white rounded-md"
            style={{
              backgroundImage: `url(${bgimage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
>>>>>>> 94971d787d75595e1410d15142f5b86fd235819b
            Advertised Product
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20">
            {advertisePrudct.map((product) => (
              <AdvertiseProductCard
                key={product?._id}
                product={product}
              ></AdvertiseProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertiseProducts;
