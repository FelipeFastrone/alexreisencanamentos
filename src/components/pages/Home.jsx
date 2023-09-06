import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
        <section className={styles.info}>
        <h1>Atendemos:</h1>
        
        <article>
          <h3>Residencial</h3>
          <div></div>
        </article>
        <article>
          <h3>Condominio</h3>
          <div></div>
        </article>
        <article>
          <h3>Reparo Hidráulico</h3>
          <div></div>
        </article>
        <article>
          <h3>Empresa</h3>
          <div></div>
        </article>
        <article>
          <h3>Órgão Público</h3>
          <div></div>
        </article>
      </section>
      <section className={styles.service}>
      <h2>Nossos serviços:</h2>
        <article>
          <h3>Detecção de Vazamento</h3>
          <div></div>
        </article>
        <article>
          <h3>Mau Cheiro de Esgoto</h3>
          <div></div>
        </article>
        <article>
          <h3>Reparo Hidráulico</h3>
          <div></div>
        </article>
        <article>
          <h3>Tubulação PVC</h3>
          <div></div>
        </article>
        <article>
          <h3>Tubulação FERRO</h3>
          <div></div>
        </article>
        <article>
          <h3>Tubulação Cobre</h3>
          <div></div>
        </article>
      </section>
      
    </div>
  );
}
