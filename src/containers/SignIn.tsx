// import React from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/uiSlice";
const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <Modal
      onClose={() => {
        dispatch(closeModal());
      }}
      className="sign-in"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* {formError && <p className="text-red-500">{formError}</p>} */}
        <Input
          required
          placeholder="Email"
          value={"email"}
          onChange={() => {}}
        />
        <Input
          required
          placeholder="Password"
          type="password"
          value="password"
          onChange={() => {}}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500">
          {/* {isLoading ? "Signing in..." : "Sign In"} */}
          Sign In
        </button>
        <pre className="cursor-pointer text-blue-500">
          Don't have an account? Register.
        </pre>
      </div>
    </Modal>
  );
};

export default SignIn;
