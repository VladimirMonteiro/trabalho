import { authContext } from "../../context/authProvider/AuthContext"
import { useContext } from "react"


const Protected = () => {

    const auth = useContext(authContext)

    if(!auth.token){
        return <h1>Acesso Negado</h1>

    }
    else{
        return null
    }

    
}
export default Protected