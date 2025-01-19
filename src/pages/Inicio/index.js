import Banner from 'components/Banner';
import Container from 'components/Container';

import SecaoCategoria from 'components/SecaoCategoria';

import VideoProvider, { VideoContext } from 'Contextos/video';
import React, { useContext } from 'react'

const categorias = [
  {
    nome: 'Front End',
    cor: '#6BD1FF'
  },
  {
    nome: 'Back End',
    cor: '#00C86F'
  },
  {
    nome: 'Inovação e Gestão',
    cor: '#FFBA05'
  },
]

const Inicio = () => {

  const {dados} = useContext(VideoContext);

  const getCorCategoria = (nomeCategoria) => {
    const categoria = categorias.find(categoria => categoria.nome === nomeCategoria);
    return categoria ? categoria.cor : '#F04191'; 
  };

  return (
    <>
    <Container>
      {dados[1] && <Banner topicoVideo={dados[1].categoria} nomeVideo={dados[1].titulo} descricaoVideo={dados[1].descricao} urlVideo={dados[1].video} urlImagem={dados[1].imagem}corCategoria={getCorCategoria(dados[1].categoria)}/>}
      

      {categorias.map((item, indice) => (
        <VideoProvider>
          <SecaoCategoria key={indice} corCategoria={item.cor} categoria={item.nome}/>
        </VideoProvider>
        ))
      }
    </Container>
    </>
    
  )
}

export default Inicio;
