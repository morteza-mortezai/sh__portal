import axios from "axios";

// let token = sessionStorage.getItem("jwtToken");
const instance = axios.create({
  baseURL: "http://localhost/shahernegar/shahernegar",
  //baseURL: 'http://localhost:60809',
  headers: {
    // Authorization: "Bearer " + token,
    "content-type": "application/json",
  },
});
export default instance;
