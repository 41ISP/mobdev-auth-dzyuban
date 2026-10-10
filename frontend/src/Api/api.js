import axios from "axios"

const apiInstance = axios.create({ baseURL: "https://api.kitek-pg.ru/api/feedback/", headers: { "Content-Type": "application/json", "Accept": "application/json" }, })

const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const loginUser = async (user) => {
    const ent = await apiInstance.post("/auth/login", user)
    return ent
}

const getMessages = async () => {
    const res = await apiInstance.get("/messages")
    return res
}

const getMessage = async () => {

}

export const api = {registerUser, loginUser, getMessage, getMessages }
