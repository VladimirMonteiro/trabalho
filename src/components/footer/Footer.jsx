import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css'


function Footer() {
    const [dataHora, setDataHora] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const dataHoraBrasilia = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
            setDataHora(dataHoraBrasilia);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className= {styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                
                </div>
                <div className={styles.edereco}>
                    <p>Onde Estamos: Porto Alegre</p>
                </div>
                <div className={styles.contato}>
                    <p>Atendimento UnderMind: +55 54996888777</p>
                </div>
                <div id={styles.data_hora}>{dataHora}</div>
            </div>
        </footer>
    );
}

export default Footer;
