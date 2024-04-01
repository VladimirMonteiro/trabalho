import '../../pages/disciplina/Disciplina.css'


const TableStudent = ({id, discipline, teacher,  data}) => {
    return(
        <div className="container">
        {message && <Message message={message}/>}
        <h1>Ofertas de Turmas</h1>
        {loading && (<Loading/>)}
        {!loading && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>{id}</th>
                  <th>{discipline}</th>
                  <th>{}</th>
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
    )
}


export default Table
