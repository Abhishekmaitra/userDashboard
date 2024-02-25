// import React from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../redux/uiSlice";
const Register = () => {
  const dispatch = useDispatch();
  return (
    <Modal
      onClose={() => {
        dispatch(closeModal());
      }}
      className="sign-in"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input required placeholder="Name" value={"name"} onChange={() => {}} />
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
          Sign In
        </button>
        <pre
          className="cursor-pointer text-blue-500"
          onClick={() => {
            dispatch(openModal("login"));
          }}
        >
          already have an acccount? Sign In
        </pre>
      </div>
    </Modal>
  );
};

export default Register;
