import axios from "axios"
const newConnectorNew = axios.create({
  baseURL: "https://www.gogo.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
