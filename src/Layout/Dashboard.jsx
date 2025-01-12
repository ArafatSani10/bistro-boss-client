import { NavLink, Outlet } from "react-router-dom";

import { TiShoppingCart } from "react-icons/ti";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import UseCart from "../Pages/Hooks/UseCart";
const Dashboard = () => {
    const [cart] = UseCart();

    // TODO : get admin value from the database

    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl text-white font-mono  mr-5  ">Bistro Boss  <br /> Restaurent</h1>
                </div>
                <ul className="menu p-5 space-y-5">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to='/dashboard/adminHome'> <FaHome className="text-4xl"></FaHome>  <span className="text-xl font-bold">Admin Home</span> </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/addItems'> <FaUtensils className="text-4xl"></FaUtensils>  <span className="text-xl font-bold">Add Items</span> </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manageItems'> <FaList className="text-4xl"></FaList>  <span className="font-bold text-xl">Manage Items</span></NavLink>
                            </li>


                            <li>
                                <NavLink to='/dashboard/bookings'> <FaBook className="text-4xl"></FaBook>  <span className="font-bold text-xl">Manage Bookings </span></NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/users'> <FaUsers className="text-4xl"></FaUsers>   <span className="font-bold text-xl">All Users </span></NavLink>
                            </li>


                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'> <FaHome className="text-4xl"></FaHome>  <span className="text-xl font-bold">User Home</span> </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/reservation'> <FaCalendar className="text-4xl"></FaCalendar>  <span className="text-xl font-bold">Reservation</span> </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/cart'>    <TiShoppingCart className="text-4xl text-white"></TiShoppingCart><span className="font-bold text-xl">My cart ({cart.length})</span></NavLink>
                                </li>


                                <li>
                                    <NavLink to='/dashboard/review'> <FaAd className="text-4xl"></FaAd>   <span className="font-bold text-xl">Add a review </span></NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/booking'> <FaList className="text-4xl "></FaList>   <span className="font-bold text-xl">My Booking  </span></NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>

                    <li>
                        <NavLink to='/'> <FaHome className="text-4xl"></FaHome>  <span className="text-xl font-bold"> Home</span> </NavLink>
                    </li>


                    <li>
                        <NavLink to='/order/salad'> <CiMenuKebab className="text-4xl"></CiMenuKebab>   <span className="text-xl font-bold"> Menu</span> </NavLink>
                    </li>

                    <li>
                        <NavLink to='/order/contact'> <FaEnvelope className="text-4xl"></FaEnvelope>   <span className="text-xl font-bold"> Contact</span> </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;


