import styles from './Admin.module.css';
import { authContext } from '../../context/authProvider/AuthContext';
import { useContext, useState } from 'react';
import Button from '../../components/matricula/Button';
import api from '../../utils/api';
import Message from '../../components/message/Message';

const Admin = () => {




    const [turma, setTurma] = useState({});

    const [course, setCourse] = useState({})
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const [disipline, setDiscipline] = useState("");
    const [disiplinesList, setDisciplinesList] = useState([]);

    const [selectedOption, setSelectedOption] = useState("Criar Turma");

    const auth = useContext(authContext);

    const options = [
        { value: "Criar Turma", label: "Criar Turma" },
        { value: "Criar Curso", label: "Criar Curso" },
        // Adicione mais opções conforme necessário
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleOnchange = (e) => {
        setTurma({ ...turma, [e.target.name]: e.target.value });
    };

    const handleAddedDisciplines = () => {
        if (!disipline.trim()) {
            // Se o campo de disciplina estiver vazio ou contiver apenas espaços em branco
            alert("O campo de disciplina não pode estar vazio.");
            return;
        }
        setDisciplinesList([...disiplinesList, disipline]); // Adicionando a nova disciplina à lista existente
        setDiscipline(""); // Limpar o campo de entrada após adicionar a disciplina
    };

    const handleRemoveDiscipline = (index) => {
        const updatedDisciplines = [...disiplinesList];
        updatedDisciplines.splice(index, 1); // Remover a disciplina do índice especificado
        setDisciplinesList(updatedDisciplines);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await api.post('/student/createTurma', turma).then((response) => {
            setTurma({})
            setMessage(response.data.message)

            setTimeout(() => {
                setMessage("")
            }, 3000)
        }).catch(error => console.log(error))
       
        console.log(turma);
    };

    const handleSubmitCourse = async(e) => {
        e.preventDefault()

        const newcourse = {
            name,
            disciplines: disiplinesList
        }

        setCourse(newcourse)

        const data = await api.post('/course/create', newcourse).then((response) => {
            setDisciplinesList([])
            setName("")
            setMessage(response.data.message)
            
            setTimeout(()=> {
                setMessage("")

            }, 3000)
        }).catch(error => console.log(error))

       

        console.log(newcourse)
    }

    return (
        <section className={styles.container}>
            <h1>{auth.course}</h1>
            <div className={styles.center}>


                {/* Se o usúario for um aluno então renderiza tal componente */}
                {auth.isStudent !== false && (
                    <>
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
                    </>
                )}



                {/*Se o usuário não for um aluno renderiza este componente*/}
                {auth.isStudent == "" && (
                    
                    <>
                    {message && (<Message message={message}/>)}
                        <ul className={styles.list}>
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className={selectedOption === option.value ? styles.selected : ""}
                                    onClick={() => handleOptionClick(option.value)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                        <div>
                            {selectedOption === "Criar Turma" && (
                                <>
                               
                                    <form className={styles.formContainer} onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="teacher">Professor: </label>
                                            <input type="text" name="teacher" id="teacher" onChange={handleOnchange}  value={turma.teacher || ""}/>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <select className='form-control' id='course' placeholder='Curso:' name="course" onChange={handleOnchange} >
                                                <option value=''>Selecione seu curso</option>
                                                <option id="course" value='Analise e desenvolvimento de sistemas'>Analise e desenvolvimento de sistemas</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select className='form-control' id='turno' placeholder='Turno:' name="turno" onChange={handleOnchange}>
                                                <option value=''>Selecione o turno</option>
                                                <option id="course" value='manha'>Manhã</option>
                                                <option id="course" value='tarde'>Tarde</option>
                                                <option id="course" value='noite'>Noite</option>
                                            </select>
                                        </div>
                                        <div className={styles.tree}>
                                            <div>
                                                <label htmlFor="vagas">Informe o número de vagas: </label>
                                                <input type="number" name="vagas" id="vagas" onChange={handleOnchange}  value={turma.vagas}/>
                                            </div>
                                            <div>
                                                <label htmlFor="horario">Horário: </label>
                                                <input type="number" name="horario" id="horario" onChange={handleOnchange} value={turma.horario || ""} />
                                            </div>
                                            <div>
                                                <label htmlFor="dia">Dia da semana: </label>
                                                <input type="text" name="dia" id="dia" onChange={handleOnchange} value={turma.dia || ""}/>
                                            </div>
                                        </div>
                                        <div className={styles.teste}>
                                            <Button type='submit' text='Criar Turma' />
                                        </div>
                                    </form>
                                </>
                            )}
                            {selectedOption === "Criar Curso" && (
                                <>
                                    <form className={styles.formContainer} onSubmit={handleSubmitCourse}>
                                        <div className={styles.containerCreateCourse}>
                                            <div>
                                                <label htmlFor="name">Nome do curso: </label>
                                                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name || ""} />
                                            </div>
                                            <div>
                                                <label htmlFor="discipline">Insira uma disciplina: </label>
                                                <input type="text" name="disciplines" id="disciplines" onChange={(e) => setDiscipline(e.target.value)} value={disipline || ""} />
                                            </div>
                                            <div className={styles.btn} onClick={handleAddedDisciplines}>Adicionar Disciplina</div>
                                        </div>
                                        <div className={styles.tableContainer}>
                                            {disiplinesList.length !== 0 && (
                                                <>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Disciplina</th>
                                                                <th>Ação</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {disiplinesList.map((discipline, index) => (
                                                                <tr key={index}>
                                                                    <td>{discipline}</td>
                                                                    <td><button className={styles.btnRemove} onClick={handleRemoveDiscipline}>Remover</button></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </>
                                            )}

                                        </div>
                                        <div className={styles.teste}>
                                            <Button type='submit' text='Criar Curso' />
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </>
                )}

            </div>
        </section>
    );
};

export default Admin;
