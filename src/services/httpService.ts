import axios from "axios";
interface UserInput {
  email: string;
  password: string;
}

const BASE_URL = "https://reqres.in/api";

export const signIn = ({ email, password }: UserInput) => {
  return axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
};

export const register = ({ email, password }: UserInput) => {
  return axios.post(`${BASE_URL}/register`, {
    email,
    password,
  });
};
