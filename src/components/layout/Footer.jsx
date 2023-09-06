import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/alexreisencanamentos"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </li>
          <li className={styles.item}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com/alex.reis.35175"
            >
              <FaFacebook className={styles.icon} />
            </a>
          </li>
          <li className={styles.item}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/5519998724345"
            >
              <FaWhatsapp className={styles.icon} />
            </a>
          </li>
        </ul>

          <p className={styles.copy}>
        <a target="_blank" rel="noreferrer" href="https://wa.me/5519997254924">
            <span>FelipeFastrone</span>&copy; 2023
        </a> 
          </p>
      </div>
    </footer>
  );
}
