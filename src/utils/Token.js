 const Token = {
  saveToken: (value) => localStorage.setItem("token", value),
  deleteToken: () => localStorage.setItem("token", null),
  getToken: () => localStorage.getItem("token"),
  hasToken: () => !!localStorage.getItem("token"),
};
export default Token