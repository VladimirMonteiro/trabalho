import { createContext, useEffect, useState } from "react";
import { getStudentLocalStorage, loginRequest, setStudentLocalStorage } from "./utils";

const authContext = createContext();

function AuthProvider({ children }) {
  const [student, setStudent] = useState(null);
  const [registration, setRegistration] = useState(0);

  useEffect(() => {
    const studentData = getStudentLocalStorage();

    if (studentData) {
      setStudent(studentData);
    }

    
  }, []);

  
  
console.log(student)

  async function authenticate(email, password) {
    const response = await loginRequest(email, password);
    if (response.error) {
      return response;
    } else {
      const payload = {
        token: response.token,
        student: response.student._id,
        isStudent: response.student.isStudent,
        course: response.student.course,
        disciplines: response.student.disciplines
      };
      setStudent(payload);
      setStudentLocalStorage(payload);
    }
  }

  async function logout() {
    setStudent(null);
    setStudentLocalStorage(null);
  }

  function triggerRegistrationUpdate() {
    // Incrementando o estado de registration para acionar o useEffect
    setRegistration(prev => prev + 1);
  }

  return (
    <authContext.Provider value={{ ...student, authenticate, logout }}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
