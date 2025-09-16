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
import { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  const handleUserIconClick = () => {
    if (!token) {
      navigate("/login");
    } else {
      // Toggle dropdown on mobile/touch devices
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    // Only auto-open on hover for non-touch devices
    if (!('ontouchstart' in window) && token) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // Only auto-close on hover leave for non-touch devices
    if (!('ontouchstart' in window)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-3 sm:py-5 px-4 sm:px-6 font-medium">
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} className="w-24 sm:w-32 md:w-36" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right side icons */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* Search - visible on all screens */}
        <Search
          onClick={() => setShowSearch(true)}
          strokeWidth={1.5}
          className="w-5 h-5 cursor-pointer hover:text-gray-500 transition-colors"
        />

        {/* User dropdown */}
        <div 
          className="group relative" 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <User
            strokeWidth={1.5}
            className="w-5 h-5 cursor-pointer hover:text-gray-500 transition-colors"
            onClick={handleUserIconClick}
          />
          
          {/* Dropdown Menu */}
          {token && (
            <div className={`absolute dropdown-menu right-0 pt-4 z-50 ${
              isDropdownOpen ? 'block' : 'hidden group-hover:block'
            }`}>
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-600 rounded-lg shadow-xl border border-gray-100">
                <p 
                  className="cursor-pointer hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all"
                  onClick={() => setIsDropdownOpen(false)} // Close on mobile after click
                >
                  My Profile
                </p>
                <p 
                  onClick={() => {
                    navigate("/orders");
                    setIsDropdownOpen(false); // Close on mobile after navigation
                  }} 
                  className="cursor-pointer hover:text-black hover:bg-gray-50 px-2 py-1 rounded transition-all"
                >
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
            className="w-5 h-5 hover:text-gray-500 transition-colors"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] group-hover:bg-gray-700 transition-colors">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile menu button */}
        <Menu
          strokeWidth={1.5}
          className="w-5 h-5 cursor-pointer lg:hidden hover:text-gray-500 transition-colors"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 z-50 shadow-2xl ${
          visible ? "w-full sm:w-80" : "w-0"
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