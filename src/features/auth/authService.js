import axios from "axios"
const API_URL = "/api/user"

const login = async (formData) => {
    const response = await axios.post(API_URL + "/login", formData)
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
}

const register = async (formData) => {
    const response = await axios.post(API_URL + "/", formData)
    return response.data
}

const authService = {
    login,
    register,
};

export default authService;