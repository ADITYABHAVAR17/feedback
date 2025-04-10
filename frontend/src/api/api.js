import axios from "axios";

const instance = axios.create({
  baseURL: "/api", // Change this to your backend base URL
//   withCredentials: true, // allows sending cookies for auth if using JWT with cookies
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"), // Set token from local storage if available
  },
//   withCredentials: true, // allows sending cookies for auth if using JWT with cookies
});

export default instance;
