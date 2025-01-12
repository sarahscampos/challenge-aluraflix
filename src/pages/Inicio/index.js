import Banner from 'components/Banner';
import Container from 'components/Container';
import React from 'react'

const Inicio = () => {
  const urlVideo ='https://www.youtube.com/embed/vJ3CXirefq8?si=_PCESd0OPCG0BWeU';
  const urlImagem = 'https://placehold.co/600x400?text=Hello+World';
  return (
    <>
    <Container>
      <Banner topicoVideo='front end' nomeVideo='Teste' descricaoVideo='etc' urlVideo={urlVideo} urlImagem={urlImagem}/>

    </Container>
    </>
    
  )
}

export default Inicio;
