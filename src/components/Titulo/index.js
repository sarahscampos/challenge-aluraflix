import React from 'react';
import styles from "./Titulo.module.css";

const Titulo = ({children}) => {
  return (
    <div className={styles.titulo}>
      <h2>{children}</h2>
    </div>
  );
}

export default Titulo;
