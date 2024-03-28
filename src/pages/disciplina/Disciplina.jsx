import { useEffect, useState, useContext } from "react";
import { authContext } from "../../context/authProvider/AuthContext";
import api from "../../utils/api";
import Loading from '../../components/loading/Loading'
import "./Disciplina.css";

function Disciplina() {
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true)
  const auth = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/course/getAll");
      
        const filteredTurmas = response.data.turmas.filter(
          (turma) => turma.course === auth.course
        );
        setTurmas(filteredTurmas);
        setLoading(false)
      } catch (error) {
        console.error("Erro ao obter turmas:", error);
      }
    };





    fetchData();
  }, [auth.course]); // Adicionando auth.course como dependência para refetch quando o curso mudar

  console.log(turmas)

  const handleRegistration = async (idTurma) => {
    try {
      const response = await api.put(`/student/register-disciplines/${auth.student}`, { idTurma });
      console.log(response.data);
      // Adicione aqui qualquer lógica adicional que você queira executar após o registro bem-sucedido
    } catch (error) {
      console.error("Erro ao registrar disciplina:", error);
    }
  };


  return (
    <div className="container">
      <h1>Ofertas de Turmas</h1>
      {loading && (<Loading/>)}
      {!loading && (
         <div className="table-responsive">
         <table className="table">
           <thead>
             <tr>
               <th>ID</th>
               <th>Disciplina</th>
               <th>Professor</th>
               <th>Horário</th>
               <th>Vagas Disponíveis</th>
               <th>Ações</th>
             </tr>
           </thead>
           <tbody>
             {turmas.map((turma, index) => (
               <tr key={turma._id}>
                 <td>{index + 1}</td>
                 <td>{turma.discipline}</td>
                 <td>{turma.teacher}</td>
                 <td>{turma.dia}-{turma.turno}-{turma.horario}</td>
                 <td>{turma.vagas}</td>
 
                 <td>
                   {turma.vagas > 0 && !auth.disciplines.includes(turma.discipline) ? (
                     <div onClick={() => handleRegistration(turma._id)} className="btn-primary">
                       Matricule-se
                     </div>
                   ) : (
                     <>
                     {turma.vagas === 0 && (<button className="btn btn-secondary btn-sm" disabled>
                       Indisponível
                     </button>)}
                     {auth.disciplines.includes(turma.discipline) && (<button className="btn btn-secondary btn-sm" disabled>
                       Matriculado
                     </button>)}
                     
                     
                     </>
                     
                   )}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
         </div>
        
      )}
     
     
    </div>
  );
}

export default Disciplina;
