
import { useState } from 'react'
import styles from './Login.module.css'
import api from '../../utils/api'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])



    const handleSubmit = async(e) => {
        e.preventDefault()

        const student = {
            email,
            password
        }

       const data = await api.post('/student/login', student).then((response) => {
        console.log(response.data)
        return response.data
       }).catch((error) => {
        console.log(error.response.data.error)
        setErrors(error.response.data)
       })

    }

    return(

        <section className={styles.container}>
            
            <h1>Login - Sistema de matriculas</h1>
            <div className={styles.formContainer}>
                
                <form onSubmit={handleSubmit}>
                    <div className={styles.formControl}>
                        <label htmlFor="user">Usuário: </label>
                        <input type="text" name="user" id="user" onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="password">Senha: </label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password || ''}/>
                    </div>

                    <input className={styles.btnPrimary} type="submit" value="Entrar" />
                    <p>Esqueceu a senha? <a href="#">Clique aqui!</a></p>
                </form>
            </div>


        </section>
    )
}


export default Login