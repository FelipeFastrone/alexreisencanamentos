import styles from './CacaVazamento.module.css';

export default function CacaVazamento(){
    return (
        <div className={styles.wrapper}>
            <h1>Detecção de Vazamento</h1>
             <section>
                <p>Problemas com vazamentos ocultos? Sua conta de água ficou mais cara? Nós da <strong>Alex Reis Encanamentos</strong> vamos resolver o seu problema</p>
                <br/>
                <p>Com equipamentos profisionais, nós podemos encontrar com precisão o local de vazamento, sem precisar causar danos adicionais</p>
             </section>
             <section>
                <h3>Profissionais especialistas</h3>
                <p>Contamos com os melhores profissionais da área para levar até voçê, para melhor atender-lo</p>
             </section>
        </div>
    )
}