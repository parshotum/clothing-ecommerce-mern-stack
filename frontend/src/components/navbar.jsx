import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Home,
  Package,
  Info,
  Phone,
} from "lucide-react";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
  <div className="navbar-glass-pro flex items-center justify-between py-3 sm:py-5 px-4 sm:px-8 font-medium shadow-md rounded-xl">
      {/* Logo */}
      <Link to={"/"} className="logo-pro">
        <img src={assets.logo} className="w-28 sm:w-36 md:w-40" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
  <ul className="hidden lg:flex gap-10 text-base text-gray-800 tracking-wide">
        <NavLink to={"/"} className="nav-pro flex flex-col items-center gap-1">
          <span>HOME</span>
          <span className="nav-pro-underline"></span>
        </NavLink>

        <NavLink
          to={"/collection"}
          className="nav-pro flex flex-col items-center gap-1"
        >
          <span>COLLECTION</span>
          <span className="nav-pro-underline"></span>
        </NavLink>

        <NavLink to={"/about"} className="nav-pro flex flex-col items-center gap-1">
          <span>ABOUT</span>
          <span className="nav-pro-underline"></span>
        </NavLink>

        <NavLink to={"/contact"} className="nav-pro flex flex-col items-center gap-1">
          <span>CONTACT</span>
          <span className="nav-pro-underline"></span>
        </NavLink>
      </ul>

      {/* Right side icons */}
  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        {/* Search - visible on all screens */}
        <Search
          onClick={() => setShowSearch(true)}
          strokeWidth={1.5}
          className="w-5 h-5 cursor-pointer icon-pro transition-colors"
        />

        {/* User dropdown */}
        <div className="group relative">
          <User
            strokeWidth={1.5}
            className="w-5 h-5 cursor-pointer icon-pro transition-colors"
            onClick={() => (token ? null : navigate("/login"))}
          />
          {/* drop Down Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-600 rounded-lg shadow-xl border border-gray-100">
                <p className="cursor-pointer hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all">
                  My Profile
                </p>
                <p onClick={()=>navigate("/orders")} className="cursor-pointer hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all">
                  Orders
                </p>
                <hr className="border-gray-200 my-1" />
                <button
                  onClick={logout}
                  className="w-full text-left text-gray-600 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-all"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Shopping cart */}
        <Link to={"/cart"} className="relative group">
          <ShoppingBag
            strokeWidth={1.5}
            className="w-5 h-5 icon-pro transition-colors"
          />
          <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-900 text-white aspect-square rounded-full text-[10px] font-semibold border border-white shadow group-hover:scale-110 transition-transform">
            {getCartCount()}
          </span>
        </Link>

        {/* Mobile menu button */}
        <Menu
          strokeWidth={1.5}
          className="w-5 h-5 cursor-pointer lg:hidden icon-pro transition-colors"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-400 z-50 shadow-2xl ${
          visible ? "w-full sm:w-80 animate-slide-in" : "w-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <h3 className="text-xl font-semibold text-gray-800">Menu</h3>
            <button
              onClick={() => setVisible(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X strokeWidth={1.5} className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile navigation links */}
          <div className="flex-1 py-4 bg-gradient-to-b from-white to-gray-50">
            <NavLink
              to={"/"}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-r-4 hover:border-blue-600 transition-all duration-200 font-medium"
              onClick={() => setVisible(false)}
            >
              <Home strokeWidth={1.5} className="w-5 h-5" />
              <span className="ml-3">HOME</span>
            </NavLink>
            <NavLink
              to={"/collection"}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:border-r-4 hover:border-purple-600 transition-all duration-200 font-medium"
              onClick={() => setVisible(false)}
            >
              <Package strokeWidth={1.5} className="w-5 h-5" />
              <span className="ml-3">COLLECTION</span>
            </NavLink>
            <NavLink
              to={"/about"}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 hover:border-r-4 hover:border-green-600 transition-all duration-200 font-medium"
              onClick={() => setVisible(false)}
            >
              <Info strokeWidth={1.5} className="w-5 h-5" />
              <span className="ml-3">ABOUT</span>
            </NavLink>
            <NavLink
              to={"/contact"}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:border-r-4 hover:border-orange-600 transition-all duration-200 font-medium"
              onClick={() => setVisible(false)}
            >
              <Phone strokeWidth={1.5} className="w-5 h-5" />
              <span className="ml-3">CONTACT</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setVisible(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
