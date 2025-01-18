import React from 'react';
import styles from './NovoVideo.module.css';
import Container from 'components/Container';

const NovoVideo = () => {
  return (
    <Container>
    <section className={styles.secaoNovoVideo}>
      <h1>Novo Vídeo</h1>
      <p>Complete o formulário para criar um novo card de vídeo</p>
      <hr className={styles.linha}/>
      <h3>Criar Card</h3>
      <hr className={styles.linha}/>
      <form className={styles.formulario}>
            <div className={styles.agrupamentoForms}>
              <div className={styles.agrupamentoCampos}>
                <label for="titulo">Título</label>
                <input type="text" name="titulo" id="titulo"/>
              </div>
              <div className={styles.agrupamentoCampos}>
                <label for="categoria">Categoria</label>
                <select id="categoria">
                    <option value="">Selecione uma categoria</option>
                    <option value="frontend">Front end</option>
                    <option value="backend">Back end</option>
                    <option value="inovacaogestao">Inovação e Gestão</option>
                  </select>
              </div>
            </div>
            <div className={styles.agrupamentoForms}>
              <div className={styles.agrupamentoCampos}>
                <label for="imagem">Imagem</label>
                <input type="text" name="imagem" id="imagem"/>
              </div>
              <div className={styles.agrupamentoCampos}>
                <label for="video">Vídeo</label>
                <input type="text" name="video" id="video"/>
              </div>
            </div>
            <div className={styles.agrupamentoForms}>
              <div className={styles.agrupamentoCampos}>
                <label for="descricao">Descrição</label>
                <textarea type="text" name="descricao" id="descricao" className={styles.descricao}></textarea>
              </div>
            </div>
            <div className={styles.containerBotao}>
              <button>Limpar</button>
              <button>Confirmar</button>
            </div>
          </form>
    </section>
    </Container>
  );
}

export default NovoVideo;

