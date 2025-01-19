import React, { useState, useContext } from 'react';
import styles from './NovoVideo.module.css';
import Container from 'components/Container';
import { VideoContext } from 'Contextos/video'; 

const NovoVideo = () => {
  const { dados, setDados, createCard } = useContext(VideoContext); 
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [descricao, setDescricao] = useState('');

  // Função para adicionar um novo card
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      titulo,
      categoria,
      imagem,
      video,
      descricao,
    };

    createCard(newCard);

  };

  return (
    <Container>
      <section className={styles.secaoNovoVideo}>
        <h1>Novo Vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo</p>
        <hr className={styles.linha} />
        <h3>Criar Card</h3>
        <hr className={styles.linha} />
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <div className={styles.agrupamentoForms}>
            <div className={styles.agrupamentoCampos}>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className={styles.agrupamentoCampos}>
              <label htmlFor="categoria">Categoria</label>
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Selecione uma categoria</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Inovação e Gestão">Inovação e Gestão</option>
              </select>
            </div>
          </div>
          <div className={styles.agrupamentoForms}>
            <div className={styles.agrupamentoCampos}>
              <label htmlFor="imagem">Imagem</label>
              <input
                type="text"
                name="imagem"
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </div>
            <div className={styles.agrupamentoCampos}>
              <label htmlFor="video">Vídeo</label>
              <input
                type="text"
                name="video"
                id="video"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.agrupamentoForms}>
            <div className={styles.agrupamentoCampos}>
              <label htmlFor="descricao">Descrição</label>
              <textarea
                type="text"
                name="descricao"
                id="descricao"
                className={styles.descricao}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.containerBotao}>
            <button type="button" onClick={() => {}}>Limpar</button>
            <button type="submit">Confirmar</button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default NovoVideo;
