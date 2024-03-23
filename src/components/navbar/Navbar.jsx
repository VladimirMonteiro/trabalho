import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

import {authContext} from '../../context/authProvider/AuthContext'
import { useContext } from 'react'
const Navbar = () => {

    const auth  = useContext(authContext)

    


    return(
        <header className={styles.headerContainer}>
            <div className={styles.center}>
                
                <div>
                    <h1 className={styles.title}><Link to='/'>Under Mind</Link></h1>
                </div>
                <nav>
                    {auth.token && (
                        <ul>
                            <li><Link to='/login' onClick={auth.logout}>Sair</Link></li>
                        <li><Link to='/Matricula'>Matricula</Link></li>
                        </ul>

                    )}
                    {!auth.token && (
                        <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/Matricula'>Matricula</Link></li>
                    </ul>
                    )}
                </nav>
            </div>


        </header>
    )
}


export default Navbar