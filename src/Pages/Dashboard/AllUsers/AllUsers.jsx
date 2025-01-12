// import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
// import { FaTrashAlt, FaUser } from "react-icons/fa";
// import Swal from "sweetalert2";


// const AllUsers = () => {
//     const axiosSecure = UseAxiosSecure();
//     const { data: users = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             return res.data

//         }





//         }




//     )


//     return (
//         <div>
//             <div className="flex justify-evenly my-5 ">
//                 <h2 className="text-3xl border p-3 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-white font-bold py-2 px-4 rounded">All User</h2>
//                 <h2 className="text-3xl border p-3 bg-gradient-to-r from-red-400 via-slate-400 to-sky-500 text-white font-bold py-2 px-4 rounded">Total User : {users.length}</h2>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="table table-zebra">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th className="font-bold font-serif">Name</th>
//                             <th className="font-bold font-serif">Email</th>
//                             <th className="font-bold font-serif">Role</th>
//                             <th className="font-bold font-serif">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user, index) => <tr key={user._id}>
//                                 <th className="font-bold ">({index + 1})</th>
//                                 <td className=" font-mono font-bold">{user.name}</td>
//                                 <td className=" font-mono font-bold">{user.email}</td>
//                                 <td>
//                                     <td>
//                                         <button onClick={() => handleDeleteUser(user)} className="btn bg-orange-500 text-white font-bold  btn-lg"><FaUser></FaUser></button>
//                                     </td>
//                                 </td>
//                                 <td>
//                                     <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-red-600  text-white font-bold  btn-lg"><FaTrashAlt></FaTrashAlt></button>
//                                 </td>
//                             </tr>)
//                         }


//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AllUsers;


import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl border p-3 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-white font-bold py-2 px-4 rounded">All Users</h2>
                <h2 className="text-3xl border p-3 bg-gradient-to-r from-red-400 via-slate-400 to-sky-500 text-white font-bold py-2 px-4 rounded">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="font-bold font-serif">Name</th>
                            <th className="font-bold font-serif">Email</th>
                            <th className="font-bold font-serif">Role</th>
                            <th className="font-bold font-serif">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className="font-bold ">({index + 1})</th>
                                <td className=" font-mono font-bold">{user.name}</td>
                                <td className=" font-mono font-bold">{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;