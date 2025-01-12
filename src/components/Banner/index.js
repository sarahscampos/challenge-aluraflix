import React from "react";
import styles from './Banner.module.css';
import Titulo from "components/Titulo";

const Banner = ({topicoVideo, nomeVideo, descricaoVideo, urlVideo, urlImagem}) => {
  return (
    <>
      <section style={{backgroundImage: `url(${urlImagem})`}} className={styles.container}>
        <div>
          <Titulo>{topicoVideo}</Titulo>
          <h3>{nomeVideo}</h3>
          <p>{descricaoVideo}</p>
        </div>
       
        <iframe width="560" height="315" src={urlVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </>
  );
}

export default Banner;