import api from "../../utils/api";



export function setStudentLocalStorage(student) {
    localStorage.setItem("u", JSON.stringify(student))
}


export function getStudentLocalStorage() {
    const json = localStorage.getItem("u")

    if (!json) {
        return null
    }

    const student = JSON.parse(json)

    if (student && student.token) {
        api.defaults.headers.common["Authorization"] = student.token
    }


    return student
}


export async function loginRequest({ email, password }) {

    try {

        const request = await api.post("/student/login", { email, password })
        
        return request.data

    } catch (error) {
        return error.response.data

    }
}