import React from 'react';
import styles from "./Titulo.module.css";

const Titulo = ({ children, corCategoria }) => {
  return (
    <div className={styles.titulo} style={{backgroundColor: `${corCategoria}`}}>
      <h2>{children}</h2>
    </div>
  );
}

export default Titulo;
