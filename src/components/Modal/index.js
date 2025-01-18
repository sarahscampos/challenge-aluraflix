import React, { useContext } from "react";
import styles from './Modal.module.css';
import { IoMdCloseCircle } from "react-icons/io";
import { ModalContext } from "Contextos/modal";

const Modal = () => {

  const {modalAberto, setModalAberto} = useContext(ModalContext);
  

    function fechaModal() {
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
            <label for="titulo">Título</label>
            <input type="text" name="titulo" id="titulo"/>
            <label for="categoria">Categoria</label>
            <select id="categoria">
                <option value="">Selecione uma categoria</option>
                <option value="frontend">Front end</option>
                <option value="backend">Back end</option>
                <option value="inovacaogestao">Inovação e Gestão</option>
              </select>
            <label for="imagem">Imagem</label>
            <input type="text" name="imagem" id="imagem"/>
            <label for="video">Vídeo</label>
            <input type="text" name="video" id="video"/>
            <label for="descricao">Descrição</label>
            <textarea type="text" name="descricao" id="descricao" className={styles.descricao}></textarea>
            <div className={styles.containerBotao}>
              <button>Limpar</button>
              <button>Confirmar</button>
            </div>
          </form>
        </div>
      </>
    )
    
  );
}

export default Modal;