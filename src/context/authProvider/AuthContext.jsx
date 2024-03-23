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
            const payload = { token: response.token, student: response.studentId }


            setStudent(payload)
            setStudentLocalStorage(payload)

        }

        const payload = { token: response.token, student: response.studentId }


        setStudent(payload)
        setStudentLocalStorage(payload)
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