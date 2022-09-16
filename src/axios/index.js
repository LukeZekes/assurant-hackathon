import axios from "axios";
const BASEURL = "https://www.kennesaw.edu/"; // Placeholder
const instance = axios.create({
  baseURL: BASEURL,
});

export default instance;
