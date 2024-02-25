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
  setPassword,
} from "../redux/uiSlice";
import { signIn } from "../services/httpService";
import { RootState } from "../redux/store";
import { setAuthEmail, setAuthToken } from "../redux/authSlice";
import { useNavigate, useNavigation } from "react-router-dom";
const SignIn = () => {
  const { email, password, isLoading, error } = useSelector(
    (state: RootState) => state.ui.form
  );

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await signIn({ email, password });
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
        {error && <p className="text-red-500">{error}</p>}
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
          onClick={() => handleSignIn()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
        <pre
          className="cursor-pointer text-blue-500"
          onClick={() => {
            dispatch(openModal("register"));
          }}
        >
          Don't have an account? Register.
        </pre>
      </div>
    </Modal>
  );
};

export default SignIn;
