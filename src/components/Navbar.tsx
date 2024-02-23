import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold cursor-pointer">
              Abhishek
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <div className="cursor-pointer">
                  <Link to={"/"}>Home</Link>
                </div>
                <div className="cursor-pointer">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </div>
                <div className="cursor-pointer">
                  <div>Sign In</div>
                </div>
                <div className="cursor-pointer">
                  <div>Register</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
