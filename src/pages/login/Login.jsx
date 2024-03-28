
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import Loading from '../../components/loading/Loading'


import { authContext } from '../../context/authProvider/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const auth = useContext(authContext)
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const student = {
            email,
            password
        }


        const data = await auth.authenticate(student)



        if (data && !data.token) {
            setErrors(data.error)
            setLoading(false)
        }


        else {
            setEmail('')
            setPassword('')
            setLoading(false)
            if (auth.isStudent === false) {
                navigate('/admin/intituicao')
            }
            navigate("/admin")

        }





    }



    return (

        <section className={styles.container}>


            <h1>Login - Sistema de matriculas</h1>
            <div className={styles.formContainer}>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formControl}>
                        <label htmlFor="user">Usuário: </label>
                        <input type="text" name="user" id="user" onChange={(e) => setEmail(e.target.value)} value={email || ''} />
                        {errors && errors.includes("e-mail") && <p className={styles.error}>{errors}</p>}
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="password">Senha: </label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password || ''} />
                        {errors && errors.includes("senha") && <p className={styles.error}>{errors}</p>}
                    </div>
                    {!loading && <input className={styles.btnPrimary} type="submit" value='Entrar' />}
                    {loading && <Loading />}


                    <p>Esqueceu a senha? <a href="#">Clique aqui!</a></p>
                </form>
            </div>


        </section>
    )
}


export default Login