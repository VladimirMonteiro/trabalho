import { createContext } from "react";


const authContext = createContext()


function UserProvider({children}){
    







    return(
        <Context.UserProvider>
            {children}
        </Context.UserProvider>
    )
}



export {authContext, UserProvider}