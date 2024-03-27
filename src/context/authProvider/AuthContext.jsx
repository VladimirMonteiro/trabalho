import { Children, createContext, useEffect, useState } from "react";


import { getStudentLocalStorage, loginRequest, setStudentLocalStorage } from "./utils";


const authContext = createContext()


function AuthProvider({ children }) {

    const [student, setStudent] = useState(null)


    useEffect(() => {

        const student = getStudentLocalStorage()
        console.log(student)

        if (student) {
            setStudent(student)
        }
    }, [])




    async function authenticate(email, password) {

        const response = await loginRequest(email, password)
        if (response.error) {
           
            return response
        }
        else {
            console.log(response)
            const payload = { token: response.token, student: response.student._id, isStudent: response.student.isStudent, course: response.student.course, disciplines: response.student.disciplines }

            console.log(payload)
            setStudent(payload)
            setStudentLocalStorage(payload)

        }

    }

    async function logout() {
        setStudent(null)
        setStudentLocalStorage(null)
    }







    return (
        <authContext.Provider value={{ ...student, authenticate, logout }}>
            {children}
        </authContext.Provider>
    )
}



export { authContext, AuthProvider }