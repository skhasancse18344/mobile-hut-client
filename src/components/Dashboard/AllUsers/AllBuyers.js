import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const AllBuyers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("https://mobile-hut-server.vercel.app/allbuyer");
      const data = await res.json();
      return data;
    },
  });

  const handleUserDelete = (email) => {
    console.log(email);
    fetch(`https://mobile-hut-server.vercel.app/users/delete/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Deleted Successfully");
        refetch();
      });
  };
  return (
    <div className="">
      <h1 className="text-4xl font-bold my-16 text-center">All Buyer </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>

                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, i) => (
                <tr key={user?._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.userType}</td>

                  <td>
                    <button
                      onClick={() => handleUserDelete(user?.email)}
                      className="text-xl from-inherit"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyers;
