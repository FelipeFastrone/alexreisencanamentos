import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.mp4";

import Container from "./Container";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);
  return (
    <Container className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <video autoPlay loop>
            <source src={logo} type="video/mp4"></source>
          </video>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul className={styles.listSocial}>
          <li className={styles.itemSocial}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/alexreisencanamentos"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </li>
          <li className={styles.itemSocial}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com/alex.reis.35175"
            >
              <FaFacebook className={styles.icon} />
            </a>
          </li>
          <li className={styles.itemSocial}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/5519998724345"
            >
              <FaWhatsapp className={styles.icon} />
            </a>
          </li>
        </ul>
        <button className={styles.menuButton} onClick={onClick}>
          <span>{isActive ? <RxCross2 /> : <RxHamburgerMenu />}</span>
        </button>
        <nav
          ref={dropDownRef}
          className={isActive ? styles.active : styles.inactive}
        >
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/" onClick={onClick}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/Encanamento" onClick={onClick}>
                Encanamento
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/Esgoto" onClick={onClick}>
                Esgoto
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/Ferro" onClick={onClick}>
                Ferro
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/CacaVazamento" onClick={onClick}>
                Caça Vazamento
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/Cobre" onClick={onClick}>
                Cobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
