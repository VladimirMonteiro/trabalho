import Input from "../../components/matricula/Input";
import Button from "../../components/matricula/Button";
import './Matricula.css'

import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import api from "../../utils/api";

function Matricula() {


  const [newStudent, setNewStudent] = useState({})
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setNewStudent({...newStudent, [e.target.name]: e.target.value})

  }


  
  const handleSubmit = async(e) => {
    e.preventDefault()


    const data = await api.post('/student/register', newStudent).then((response) => {

      navigate('/login')
      setNewStudent({})
      
    }).catch((error) => setErrors(error.response.data.error))




  }





  return (
    <div className="Matricula">
      <h2>Realize sua matricula preenchendo os dados abaixo!</h2>
      <form id='matriculaForm' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nomeAluno' id='label'>Nome:</label>
          <Input className='form-control' id='nomeAluno'name='name' type='text' placeholder='Digite seu nome:' handleOnChange={handleChange}/>
          {errors && errors.includes('nome') && <p className="errorsMatricula">{errors}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='email' id='label'>Email:</label>
          <Input className='form-control' id='email' name='email' type='email' placeholder='Digite seu email:' handleOnChange={handleChange}/>
          {errors && errors.includes('email') &&  <p className="errorsMatricula">{errors}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='senha' id='label'>Senha:</label>
          <Input className='form-control' id='senha' type='password'name='password' placeholder='Digite sua senha:' handleOnChange={handleChange}/>
          {errors && errors.includes('A senha é obrigatória.') &&  <p className="errorsMatricula">{errors}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='confsenha' id='label'>Confirme sua senha:</label>
          <Input className='form-control' id='confsenha' type='password' name="confirmPassword" placeholder='Confirme sua senha:' handleOnChange={handleChange}/>
          {errors && errors.includes('confirmação de senha') &&  <p className="errorsMatricula">{errors}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='course' id='label'>Curso:</label>
          <select className='form-control' id='course' placeholder='Curso:' name="course" onChange={handleChange}>
            <option value=''>Selecione seu curso</option>
            <option id="course" value='Analise e desenvolvimento de sistemas'>Analise e desenvolvimento de sistemas</option>
          
          </select>
          {errors && errors.includes('curso') &&  <p className="errorsMatricula">{errors}</p>}
          {errors && errors.includes('Aluno ja cadastrado.') &&  <p className="errorsMatricula">{errors}</p>}
        </div>
        <div className='form-group'>
          <Button type='submit' text="Matricular-se"/>
        </div>
      </form>
    </div>
  );
}

export default Matricula
