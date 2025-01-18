import Banner from 'components/Banner';
import Container from 'components/Container';
import Modal from 'components/Modal';
import SecaoCategoria from 'components/SecaoCategoria';
import { ModalContext } from 'Contextos/modal';
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
  const urlVideo ='https://www.youtube.com/embed/vJ3CXirefq8?si=_PCESd0OPCG0BWeU';
  const urlImagem = 'https://placehold.co/600x400?text=Hello+World';
  return (
    <>
    <Container>
      <Banner topicoVideo='front end' nomeVideo='Teste' descricaoVideo='etc' urlVideo={urlVideo} urlImagem={urlImagem} corCategoria='#6BD1FF'/>

      {categorias.map((item, indice) => <SecaoCategoria key={indice} corCategoria={item.cor} categoria={item.nome}/>)}
    </Container>
    </>
    
  )
}

export default Inicio;
