import React, { useContext, useState, useEffect } from "react";
import styles from './Modal.module.css';
import { IoMdCloseCircle } from "react-icons/io";
import { ModalContext } from "Contextos/modal";
import { VideoContext } from "Contextos/video"; 
const Modal = ({ cardEdit }) => {
  const { modalAberto, setModalAberto } = useContext(ModalContext);
  const { updateCard } = useContext(VideoContext); 

  
  const [formData, setFormData] = useState(cardEdit);

  useEffect(() => {
    
    setFormData(cardEdit);
  }, [cardEdit]);

  function fechaModal() {
    setModalAberto(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleConfirm() {
   
    updateCard(cardEdit.id, formData);
    setModalAberto(false); 
  }

  return (
    modalAberto && (
      <>
        <div className={styles.overlay} onClick={fechaModal}></div>
        <div className={styles.container}>
          <h2>Editar Card</h2>
          <button className={styles.botaoSair} onClick={fechaModal}><IoMdCloseCircle size={40} /></button>
          <form className={styles.formulario}>
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Front End">Front End</option>
              <option value="Back End">Back end</option>
              <option value="Inovação e Gestão">Inovação e Gestão</option>
            </select>
            <label htmlFor="imagem">Imagem</label>
            <input
              type="text"
              name="imagem"
              id="imagem"
              value={formData.imagem}
              onChange={handleChange}
            />
            <label htmlFor="video">Vídeo</label>
            <input
              type="text"
              name="video"
              id="video"
              value={formData.video}
              onChange={handleChange}
            />
            <label htmlFor="descricao">Descrição</label>
            <textarea
              name="descricao"
              id="descricao"
              className={styles.descricao}
              value={formData.descricao}
              onChange={handleChange}
            ></textarea>
            <div className={styles.containerBotao}>
              <button type="button" onClick={() => setFormData(cardEdit)}>Resetar</button>
              <button type="button" onClick={handleConfirm}>Confirmar</button>
            </div>
          </form>
        </div>
      </>
    )
  );
}

export default Modal;
