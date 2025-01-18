import Titulo from "components/Titulo";
import React from "react";
import styles from './SecaoCategoria.module.css';
import Card from "components/Card";
import ModalProvider from "Contextos/modal";

const SecaoCategoria = ({ categoria, corCategoria }) => {
  return (
    <section className={styles.container}>
      <Titulo corCategoria={corCategoria}>{categoria}</Titulo>
      <ModalProvider>
        <Card cor={corCategoria}/>
      </ModalProvider>
    </section>
  );
}

export default SecaoCategoria;