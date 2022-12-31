import axios from "axios";

export default axios.create({
  URL: "/services",
  baseURL: "http://localhost:3500/",
  headers: {
    "Content-type": "application/json"
  }
});
