import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/uiSlice";
import { RootState } from "../redux/store";
import SignIn from "../containers/SignIn";
import Register from "../containers/Register";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalType } = useSelector(
    (state: RootState) => state.ui
  );
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white font-bold cursor-pointer">
                WebReinvent
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-white">
                  <div className="cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </div>
                  <div className="cursor-pointer">
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(openModal("login"));
                    }}
                  >
                    <div>Sign In</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(openModal("register"));
                    }}
                  >
                    <div>Register</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isModalOpen && modalType === "login" && <SignIn />}
      {isModalOpen && modalType === "register" && <Register />}
    </>
  );
};

export default Navbar;
