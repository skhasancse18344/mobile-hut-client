import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="">
      <h1 className="text-4xl font-bold my-16 ">All Users </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Varify</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.userType}</td>
                  <td>
                    <button className="badge badge-secondary p-4">
                      Varify User
                    </button>
                  </td>
                  <td>
                    <button className="badge badge-secondary p-4">
                      Make Admin
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

export default AllUsers;
