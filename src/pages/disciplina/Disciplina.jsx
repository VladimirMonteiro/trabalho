import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../../context/authProvider/AuthContext";
import api from "../../utils/api";
import Loading from '../../components/loading/Loading'
import Message from '../../components/message/Message'
import "./Disciplina.css";

function Disciplina() {
  const [turmas, setTurmas] = useState([]);
  const [student, setStudent] = useState({})
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [registrationCount, setRegistrationCount] = useState(0);
  const auth = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/course/getAll");
        const filteredTurmas = response.data.turmas.filter(
          (turma) => turma.course === auth.course
        );
        const studentFiltred = response.data.students.find((student) => student._id === auth.student)
        setStudent(studentFiltred)
        setTurmas(filteredTurmas);
        setLoading(false)
      } catch (error) {
        console.error("Erro ao obter turmas:", error);
      }
    };

    fetchData();
  }, [auth.course, registrationCount]);

  const handleRegistration = async (idTurma) => {
    try {
      const response = await api.put(`/student/register-disciplines/${auth.student}`, { idTurma });
      console.log(response.data);
      setRegistrationCount(prevCount => prevCount + 1);
      setMessage(response.data.message)
      // Rolando a página para o topo
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTimeout(() => {
        setMessage("")
      }, 3000);
    } catch (error) {
      console.error("Erro ao registrar disciplina:", error);
    }
  };

  return (
    <div className="container">
      {message && <Message message={message}/>}
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
                    {turma.vagas > 0 && !(student?.disciplines?.includes(turma.discipline)) ? (
                      <div onClick={() => handleRegistration(turma._id)} className="btn-primary">
                        Matricule-se
                      </div>
                    ) : (
                      <>
                        {turma.vagas === 0 && !(student?.disciplines?.includes(turma.discipline)) && (
                          <button className="btn btn-secondary btn-sm" disabled>
                            Indisponível
                          </button>
                        )}
                        {student?.disciplines?.includes(turma.discipline) && (
                          <button className="btn btn-secondary btn-sm" disabled>
                            Matriculado
                          </button>
                        )}
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
