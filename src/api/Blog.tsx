import axios from "axios";

export default axios.create({
  baseURL: 'http://slovakstudy.loc/',
  timeout: 2000,
});