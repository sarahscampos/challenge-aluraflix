import React from "react";
import Logo from "./LogoMain.svg";
import styles from "./Footer.module.css";
import HeaderLink from "components/HeaderLink";
import { MdHomeFilled } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <img src={Logo} alt="logo aluraflix" />
      </footer>
      <footer className={styles.footerM}>
        <nav>
          <HeaderLink url="/"><MdHomeFilled size={35} /></HeaderLink>
          <HeaderLink url="/novovideo"><IoAddCircle size={35}/></HeaderLink>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
