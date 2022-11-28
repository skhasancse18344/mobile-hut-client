import React from "react";

const PeopleSays = () => {
  return (
    <div className="text-center my-16">
      <h1 className="text-4xl font-bold">
        {" "}
        <span className=" text-lime-500">What They Say</span> About Us
      </h1>
      <p className="text-2xl text-slate-800 font-mono mt-6">
        Testimonials From Our Greates Clients
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-20 ">
        <div className="p-6 bg-slate-200">
          <h1 className="text-3xl font-bold">George Walker</h1>
          <h1 className="text-lime-500 text-2xl font-bold mt-6 ">
            Chief Financial Analyst
          </h1>
          <p className="w-1/2 mx-auto mt-6">
            Find Christmas New Year Mobile Sale Banners stock images in HD and
            millions of other ... Vector illustrations of online shopping
            website
          </p>
        </div>
        <div className="p-6 bg-slate-200">
          <h1 className="text-3xl font-bold">John Smith</h1>
          <h1 className="text-lime-500 text-2xl font-bold mt-6 ">
            Market Specialist
          </h1>
          <p className="w-1/2 mx-auto mt-6">
            Find Christmas New Year Mobile Sale Banners stock images in HD and
            millions of other ... Vector illustrations of online shopping
            website
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleSays;
