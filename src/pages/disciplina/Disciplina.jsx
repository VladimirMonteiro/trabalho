import { useEffect, useState, useContext } from "react";
import { authContext } from "../../context/authProvider/AuthContext";
import api from "../../utils/api";
import "./Disciplina.css";

function Disciplina() {
  const [turmas, setTurmas] = useState([]);
  const auth = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/course/getAll");
        console.log(response.data);
        // Verifica se há turmas e se o curso da turma é igual ao curso do usuário autenticado
        const filteredTurmas = response.data.turmas.filter(
          (turma) => turma.course === auth.course
        );
        setTurmas(filteredTurmas);
      } catch (error) {
        console.error("Erro ao obter turmas:", error);
      }
    };

    fetchData();
  }, [auth.course]); // Adicionando auth.course como dependência para refetch quando o curso mudar

  console.log(turmas)

  return (
    <div className="container">
      <h1>Ofertas de Turmas</h1>
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
                  {turma.vagas > 0 ? (
                    <a
                      href={`matricula.html?id=${turma.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Matricule-se!
                    </a>
                  ) : (
                    <button className="btn btn-secondary btn-sm" disabled>
                      Indisponível
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Disciplina;
