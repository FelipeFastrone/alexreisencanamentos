import { FaWhatsapp } from "react-icons/fa";
import styles from "./Button.module.css";
export default function BtnWhats() {
  return (
    <>
      <button className={styles.btn}>
        <a target="_blank" rel="noreferrer" href="https://wa.me/5519998724345">
          <FaWhatsapp className={styles.icon} />
        </a>
      </button>
    </>
  );
}
