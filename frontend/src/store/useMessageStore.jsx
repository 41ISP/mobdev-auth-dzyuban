import {create} from "zustand"
import { api } from "../Api/api"

export const useMessageStore = create((set) => ({
    messages: [],
    getMessages: async () => {
        try {
            const res = await api.getMessages()
            set({messages: res.data})
        } catch (error){
            console.error(error)
        }
    }
}))