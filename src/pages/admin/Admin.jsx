import styles from './Admin.module.css'



import { authContext } from '../../context/authProvider/AuthContext'
import { useContext } from 'react'

const Admin = () => {


    const auth = useContext(authContext)

    return (

        <section className={styles.container}>
            <h1>{auth.course}</h1>
           <div className={styles.center}>
               
               <ul className={styles.list}>
                   <li>Todas disciplinas</li>
                   <li>em andamento</li>
                   <li>Concluido</li>
               </ul>
               <div>
                   <details className={styles.details}>
                       <summary className=''>1 - Semestre</summary>
                       <ul>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                       </ul>
                   </details>
                   <details>
                       <summary>2 - Semestre</summary>
                       <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                   </details>
                   <details>
                       <summary>3- Semestre</summary>
                       <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                        <li>Banco de dados</li>
                   </details>
               </div>
           </div>

        </section>
    )
}


export default Admin