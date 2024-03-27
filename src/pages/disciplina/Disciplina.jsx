import "./Disciplina.css"
function Disciplina() {
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
              <tr>
                <td>1</td>
                <td>Direito Empresarial</td>
                <td>Prof. Harvey Specter</td>
                <td>Segunda-feira (manhã)</td>
                <td>10</td>
                <td>
                  <a href="matricula.html" className="btn btn-primary btn-sm">Matricule-se!</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Administração</td>
                <td>Prof. Chuck Bass</td>
                <td>Terça-feira (tarde)</td>
                <td>8</td>
                <td>
                  <a href="matricula.html" className="btn btn-primary btn-sm">Matricule-se!</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Física Avançada</td>
                <td>Prof. Sheldon Cooper</td>
                <td>Quarta-feira (noite)</td>
                <td>Vagas indisponíveis!</td>
                <td>
                  <a href="#" className="btn btn-secondary btn-sm disabled">Indisponível</a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Química</td>
                <td>Prof. Walter White</td>
                <td>Sexta-feira (noite)</td>
                <td>6</td>
                <td>
                  <a href="matricula.html" className="btn btn-primary btn-sm">Matricule-se!</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Disciplina;