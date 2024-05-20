import axios from "axios"
const API_URL = "/api/admin"

const getUsers = async (token) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get("https://supportbackend-vevi.onrender.com/users", option)
    return response.data
}

const getTickets = async (token) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get("https://supportbackend-vevi.onrender.com/tickets", option)
    return response.data
}


const getTicket = async (token, id) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("https://supportbackend-vevi.onrender.com/tickets" + '/' + id, option)
    return response.data
}


const adminService = {
    getUsers,
    getTickets,
    getTicket
}

export default adminService