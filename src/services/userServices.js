import axios from "axios";
const api = process.env.REACT_APP_API_URL;
const userServices = {
  signIn: async (payload) => await axios.post(`${api}users/sign-in`, payload),
  signUp: async (payload) => await axios.post(`${api}users/sign-up`, payload),
};
export default userServices;
