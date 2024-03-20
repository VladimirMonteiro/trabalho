import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {


    return(
        <header className={styles.headerContainer}>
            <div className={styles.center}>
                
                <div>
                    <h1 className={styles.title}><Link to='/'>Under Mind</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/Matricula'>Matricula</Link></li>
                    </ul>
                </nav>
            </div>


        </header>
    )
}


export default Navbar