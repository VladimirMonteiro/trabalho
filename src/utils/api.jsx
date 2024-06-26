import axios from 'axios'
import { getStudentLocalStorage } from '../context/authProvider/utils'

const api = axios.create({
    baseURL: `https://matricula-zvs1.onrender.com`
})

//${import.meta.env.VITE_API_URL}


api.interceptors.request.use(
    (config) => {
        const student = getStudentLocalStorage()

        if(student && student.token){
            config.headers.Authorization = `Bearer ${student.token}`
        }

        return config
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default api

