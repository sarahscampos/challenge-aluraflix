import React from "react";
import Logo from './LogoMain.svg';
import styles from './Header.module.css';
import HeaderLink from "components/HeaderLink";

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <nav>
        <img src={Logo} alt="logo aluraflix"/> 
        <div>
          <HeaderLink url="/">HOME</HeaderLink>
          <HeaderLink url="/novovideo">NOVO VÍDEO</HeaderLink>
          
        </div>
      </nav>  
    </header>
  )

}

export default Header;