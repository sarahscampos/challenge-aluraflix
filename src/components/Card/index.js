import React, {useContext, useState} from "react";
import styles from './Card.module.css';
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ModalContext } from "Contextos/modal";
import Modal from "components/Modal";

const Card = ({cor}) => {
  const {modalAberto, setModalAberto} = useContext(ModalContext);

  function abreModal() {
    setModalAberto(true);
  }



  return (
    <>
    
      <div className={styles.containerCard} style={{border: `${cor} solid 3px`, boxShadow:`inset 0 0 50px ${cor}`}}>
        <img src="https://placehold.co/400x250?text=Hello+World" alt="imagem de capa" />
        <div className={styles.containerBotao}>
          <button><MdDeleteForever size={20}/>Deletar</button>
          <button onClick={abreModal}><AiFillEdit size={20}/>Editar</button>
        </div>
        
      </div>
      <Modal/>
    </>
  );
}

export default Card;