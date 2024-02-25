import axios from "axios";
interface SignInInput {
  email: string;
  password: string;
}
const BASE_URL = "https://reqres.in/api";
export const signIn = ({ email, password }: SignInInput) => {
  return axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
};
