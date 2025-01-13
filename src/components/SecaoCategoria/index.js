import Titulo from "components/Titulo";
import React from "react";
import styles from './SecaoCategoria.module.css';

const SecaoCategoria = ({ categoria, corCategoria }) => {
  return (
    <section className={styles.container}>
      <Titulo corCategoria={corCategoria}>{categoria}</Titulo>
    </section>
  );
}

export default SecaoCategoria;