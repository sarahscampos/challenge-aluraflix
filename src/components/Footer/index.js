import React from "react";
import Logo from './LogoMain.svg';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <img src={Logo} alt="logo aluraflix"/> 
    </footer>
  );
}

export default Footer;