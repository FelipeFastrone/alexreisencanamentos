import styles from './Encanamento.module.css';


export default function Encanamento(){
    return (
        <div className={styles.container}>
            <h1>Encanamentos</h1>
            <p>Trabalhamos sempre visando a qualidade, trasparência e honestidade, oferecendo os melhores serviços e soluções!</p>
            <h3>Alguns dos serviços que prestamos:</h3>
            <ul>
                <li>Todo tipo de reparo e instalação hidráulica seja residencial,predial ou empresarial </li>
                <li>Limpeza e instalação de caixa d{"´"}agua</li>
                <li>Detecção e consertos de vazamentos</li>
                <li>Trabalhamos com tubulação de ferro, PVC, PPR</li>
                <p>Entre em contato para um orçamento!!</p>
            </ul>
        </div>
    )
} 