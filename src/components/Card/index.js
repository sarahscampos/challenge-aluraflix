import React from "react";
import styles from './Card.module.css';
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Card = ({cor}) => {

  return (
    <div className={styles.containerCard} style={{border: `${cor} solid 3px`, boxShadow:`inset 0 0 50px ${cor}`}}>
      <img src="https://placehold.co/400x250?text=Hello+World" alt="imagem de capa" />
      <div className={styles.containerBotao}>
        <button><MdDeleteForever size={20}/>Deletar</button>
        <button onClick={() => console.log('modal')}><AiFillEdit size={20}/>Editar</button>
        
        
      </div>
    </div>
  );
}

export default Card;