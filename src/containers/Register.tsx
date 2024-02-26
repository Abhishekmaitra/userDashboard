// import React from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
  setEmail,
  setError,
  setLoading,
  setName,
  setPassword,
} from "../redux/uiSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { register } from "../services/httpService";
import { setAuthEmail, setAuthToken } from "../redux/authSlice";
const Register = () => {
  const { name, email, password, isLoading } = useSelector(
    (state: RootState) => state.ui.form
  );

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await register({ email, password });
      dispatch(setAuthEmail(email));
      dispatch(setAuthToken(data.token));
      dispatch(closeModal());
      navigate("/dashboard");
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  };
  const dispatch = useDispatch();
  return (
    <Modal
      onClose={() => {
        dispatch(closeModal());
      }}
      className="sign-in"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          required
          placeholder="Name"
          value={name}
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <Input
          required
          placeholder="Email"
          value={email}
          onChange={(e) => {
            dispatch(setEmail(e.target.value));
          }}
        />
        <Input
          required
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
        />
        <button
          onClick={() => handleSignUp()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
        >
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
