import Titulo from "components/Titulo";
import React from "react";
import styles from './SecaoCategoria.module.css';
import Card from "components/Card";

const SecaoCategoria = ({ categoria, corCategoria }) => {
  return (
    <section className={styles.container}>
      <Titulo corCategoria={corCategoria}>{categoria}</Titulo>
      <Card cor={corCategoria}/>
    </section>
  );
}

export default SecaoCategoria;