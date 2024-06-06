import axios from "axios"

const login = async (formData) => {
    const response = await axios.post("https://supportbackend-vevi.onrender.com/api/user/login", formData)
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
}

const register = async (formData) => {
    const response = await axios.post("https://supportbackend-vevi.onrender.com/api/user", formData)
    return response.data
}

const authService = {
    login,
    register,
};

export default authService;