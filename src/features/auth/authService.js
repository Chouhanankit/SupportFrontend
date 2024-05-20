import axios from "axios"
const API_URL = "/api/user"

const login = async (formData) => {
    const response = await axios.post("https://supportbackend-vevi.onrender.com/login", formData)
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
}

const register = async (formData) => {
    const response = await axios.post("https://supportbackend-vevi.onrender.com/", formData)
    return response.data
}

const authService = {
    login,
    register,
};

export default authService;