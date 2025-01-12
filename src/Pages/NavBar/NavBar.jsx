import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provides/AuthProviders";
import { TiShoppingCart } from "react-icons/ti";
import UseCart from "../Hooks/UseCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li className="text-black font-bold lg:text-white">
            <Link to='/'>Home </Link>
        </li>

        <li className="font-bold text-black lg:text-white" >
            <Link to='/menu'>Our Menu</Link>
        </li>
        <li className="font-bold text-black lg:text-white">
            <Link to='/order/salad'>Order Food </Link>
        </li>
        <li className="font-bold text-black lg:text-white">
            <Link to='/secret'>Secret </Link>
        </li>

        <li>
            <Link to='/dashboard/cart'><button className="btn text-[15px] -mt-2">
                <TiShoppingCart ></TiShoppingCart>
                <div className="">+{cart.length}</div>
            </button></Link>
        </li>




        {
            user ? <>
                <span></span>
                <button onClick={handleLogOut} className="btn btn-ghost font-bold text-black lg:text-white">Log Out</button>

            </> : <>   <li className="font-bold text-black lg:text-white">
                <Link to='login'>Login </Link>
            </li></>
        }

    </>
    return (
        <div className="navbar fixed  z-10 bg-opacity-30 bg-black max-w-screen-2xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
    {
        user ? (
            <div className="flex items-center">
                {/* Display the user's photo */}
                {user.photoURL && (
                    <img
                        src={user.photoURL}
                        alt="User Photo"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                )}
                <span className="font-bold border border-r-2 max-sm:text-sm p-2 rounded-md">
                    {user.displayName}
                </span>
            </div>
        ) : <></>
    }
</div>

        </div>
    );
};

export default NavBar;