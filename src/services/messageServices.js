import axios from "axios";
import Token from "../utils/Token";
const api = process.env.REACT_APP_API_URL;
const messageServices = {
  sendMessage: (payload) => {
    const token = Token.getToken();
    return axios.post(`${api}message/send`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteMessage: (payload) => {
    const token = Token.getToken();
    return axios.delete(`${api}message/delete`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  readMessage: (payload) => {
    const token = Token.getToken();
    return axios.put(
      `${api}message/read`,
      { message_id: payload },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  getMessages: (payload) => {
    const token = Token.getToken();
    return axios.get(`${api}message/list`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default messageServices;
