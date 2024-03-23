import axios from 'axios'
import { getStudentLocalStorage } from '../context/authProvider/utils'

const api = axios.create({
    baseURL: `http://localhost:5000`
})


api.interceptors.request.use(
    (config) => {
        const student = getStudentLocalStorage()

        if(student && student.token){
            config.headers.Authorization = `Bearer ${student.token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api

