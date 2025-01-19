import Titulo from "components/Titulo";
import React, { useContext } from "react";
import styles from './SecaoCategoria.module.css';
import Card from "components/Card";
import ModalProvider from "Contextos/modal";
import { VideoContext } from "Contextos/video";

const SecaoCategoria = ({ categoria, corCategoria }) => {
  const { dados } = useContext(VideoContext);

  return (
    <section className={styles.container}>
      <Titulo corCategoria={corCategoria}>{categoria}</Titulo>
      <div className={styles.cardsContainer}>
        <ModalProvider>
          {dados && dados.filter(item => item.categoria === categoria).map((item, index) => (
            <Card
              key={index}
              id={item.id}
              cor={corCategoria}
              imagem={item.imagem}
              video = {item.video}
              titulo = {item.titulo}
              descricao={item.descricao}
              categoria={item.categoria}
            />
          ))}
        </ModalProvider>
      </div>
    </section>
  );
}

export default SecaoCategoria;
