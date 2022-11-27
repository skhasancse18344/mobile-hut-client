import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaUserAltSlash } from "react-icons/fa";

const AllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };
  const handleVerifyUser = (id) => {
    fetch(`http://localhost:5000/users/varify/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User Verified");
          refetch();
        }
      });
  };
  const handleUserDelete = (id) => {
    fetch(`http://localhost:5000/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
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
                    {user?.varification !== "Varified" && (
                      <button
                        onClick={() => handleVerifyUser(user?._id)}
                        className="badge badge-secondary p-4"
                      >
                        Varify User
                      </button>
                    )}
                  </td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user?._id)}
                        className="badge badge-secondary p-4"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleUserDelete(user?._id)}
                      className="text-xl from-inherit"
                    >
                      <FaUserAltSlash></FaUserAltSlash>
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
