import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Allslellers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("https://mobile-hut-server.vercel.app/allseller");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (email) => {
    fetch(`https://mobile-hut-server.vercel.app/users/admin/${email}`, {
      method: "PUT",
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
  const handleRemoveAdmin = (email) => {
    fetch(`https://mobile-hut-server.vercel.app/users/noadmin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("Admin Removed Successfully");
          refetch();
        }
      });
  };
  const handleVerifyUser = (email) => {
    fetch(`https://mobile-hut-server.vercel.app/users/varify/${email}`, {
      method: "PUT",
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
  const handleUnverifyUser = (email) => {
    fetch(`https://mobile-hut-server.vercel.app/users/unvarify/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User Unvarified");
          refetch();
        }
      });
  };
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
      <h1 className="text-4xl font-bold my-16 text-center">All Seller </h1>
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
                    {user?.varification !== "Varified" ? (
                      <button
                        onClick={() => handleVerifyUser(user?.email)}
                        className="badge badge-secondary p-4"
                      >
                        Varify User
                      </button>
                    ) : (
                      <button
                        className="badge  badge-warning text-white p-4 px-6"
                        onClick={() => handleUnverifyUser(user?.email)}
                      >
                        Unvarify
                      </button>
                    )}
                  </td>
                  <td>
                    {user?.role !== "admin" ? (
                      <button
                        onClick={() => handleMakeAdmin(user?.email)}
                        className="badge badge-secondary p-4  px-6"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveAdmin(user?.email)}
                        className="badge p-4 badge-warning text-white "
                      >
                        Remove Admin
                      </button>
                    )}
                  </td>
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

export default Allslellers;
