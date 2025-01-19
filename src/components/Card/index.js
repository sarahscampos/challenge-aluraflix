import React, { useContext, useState } from "react";
import styles from './Card.module.css';
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ModalContext } from "Contextos/modal";
import Modal from "components/Modal";
import { VideoContext } from "Contextos/video";

const Card = ({ id, cor, imagem, titulo, video, categoria, descricao }) => {
  const { modalAberto, setModalAberto } = useContext(ModalContext);
  const { deleteCard } = useContext(VideoContext);
  const [cardEdit, setCardEdit] = useState({
    id,
    titulo,
    imagem,
    video,
    categoria,
    descricao,
  });

  function abreModal() {
   
    setModalAberto(true);
   
    setCardEdit({ id, titulo, imagem, video, categoria, descricao });
  }

  function handleDelete() {
    deleteCard(id); 
  }

  return (
    <>
    
      <div className={styles.containerCard} style={{border: `${cor} solid 3px`, boxShadow:`inset 0 0 50px ${cor}`}} >
        <a href={video} target="_blank" rel="noreferrer"><img src={imagem} alt={`imagem de capa ${titulo}`} /></a>
        <div className={styles.containerBotao}>
          <button onClick={handleDelete}><MdDeleteForever size={20}/>Deletar</button>
          <button onClick={abreModal}><AiFillEdit size={20}/>Editar</button>
        </div>
      </div>
      <Modal cardEdit={cardEdit} />
    </>
  );
}

export default Card;
