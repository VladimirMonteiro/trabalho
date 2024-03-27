import'./Home.css'


const Home = () => {

    return (
        <div className='containerHome'>
            <div className="row">
                <div className="col-md-6">
                    <h1 className="faculdade-name">Universidade Under Mind</h1>
                    <p className="slogan">Formando mentes brilhantes, construindo futuros brilhantes!</p>
                    <p className="presentation-text">Estude com os melhores professores do mundo de forma exclusiva e decole em sua carreira! Aqui o seu sucesso é garantido!</p>
                </div>
            </div>
            <div className="row image-container">
                <div className="col-md-3">
                <img src="https://i.pinimg.com/564x/cf/ea/72/cfea724d6f9d995dfc35a9284bd707e1.jpg" alt="Descrição da Imagem 1"/>
                
                    <div className="image-description-container">
                        <p className="image-description">Professor Harvey Specter: Harvey é considerado o "Melhor Advogado do Mundo" e em especial no direito empresarial,se formou na Universidade de Harvard e agora compartilha seus maiores conhecimentos em suas aulas.</p>
                    </div>
                </div>
                <div className="col-md-3">
                <img src="https://i.pinimg.com/564x/a2/0b/25/a20b25257f911f2b568f4a01a7c30666.jpg" alt="Descrição da Imagem 2"/>
                    <div className="image-description-container">
                        <p className="image-description">Professor Chuck Bass: De origem simples, Bass é o "Maior investidor e administrador do mundo" conquistou uma fortuna bilionária ainda muito jovem e construiu o hotel mais luxuoso do mundo (New York Palace Hotel), estudou em Harvard e agora transmite seus conhecimentos dando aulas de Administração.</p>
                    </div>
                </div>
                <div className="col-md-3">
               <img src="https://i.pinimg.com/564x/34/dc/57/34dc57a23707eddafea188ac05d4cd0d.jpg" alt="Descrição da Imagem 3"/>
                    <div className="image-description-container">
                        <p className="image-description">Professor Sheldon Cooper: Conhecido como "O homem mais inteligente do mundo",Sheldon foi vencedor de 5 prêmios Nobel e se formou em Física aos 12 anos de idade. Agora faz parte do nosso time de professores formando novos gênios pelo mundo!</p>
                    </div>
                </div>
                <div className="col-md-3">
                <img src="https://i.pinimg.com/564x/fe/6b/b9/fe6bb92676efe8fec5c385905ef71834.jpg" alt="Descrição da Imagem 4"/>
                    <div className="image-description-container">
                        <p className="image-description">Professor Walter White: White foi considerado um "Gênio da Química" por suas descobertas e seu amor por cristais. Professor de química por formação e disputado por várias Universidades renomadas White agora faz parte da nossa equipe acadêmica!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home