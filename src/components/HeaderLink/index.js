import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderLink.module.css";

const HeaderLink = ({children, url}) => {
  return (
    <NavLink 
      className={({ isActive }) => `
      ${styles.link}
      ${isActive ? styles.linkDestacado : ""}
      `}
      to={url} 
      end 
      >
        {children}
    </NavLink>
  );
}

export default HeaderLink;