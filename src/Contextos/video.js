import React, { useState, createContext, useEffect } from "react";

export const VideoContext = createContext();
VideoContext.displayName = "Video";

const VideoProvider = ({ children }) => {
  const [dados, setDados] = useState([]);

  // Função para buscar os dados dos cards
  async function dadosJson() {
    try {
      const response = await fetch("http://localhost:3000/cards");
      if (!response.ok) {
        throw new Error("Erro ao carregar o JSON");
      }
      const data = await response.json();
      setDados(data);  // Supondo que a resposta contenha os cards diretamente no corpo
    } catch (error) {
      console.error(error);
    }
  }

  // Função para deletar um card
  const deleteCard = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cards/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove o card deletado do estado sem precisar recarregar os dados
        setDados(dados.filter(item => item.id !== id));
      } else {
        console.error("Erro ao deletar o card");
      }
    } catch (error) {
      console.error("Erro ao deletar o card", error);
    }
  };

  const createCard = async (newCard) => {
    try {
      const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      if (response.ok) {
        const addedCard = await response.json();
        setDados([...dados, addedCard]);
        alert("Card criado com sucesso!")
      } else {
        console.error("Erro ao criar o card");
      }
    } catch (error) {
      console.error("Erro ao criar o card", error);
    }
  };

  const updateCard = async (id, updatedCard) => {
    try {
      const response = await fetch(`http://localhost:3000/cards/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCard),
      });
  
      if (response.ok) {
        const updatedData = await response.json();
       
        setDados(dados.map(item => item.id === id ? updatedData : item));
        alert("Card atualizado com sucesso!");
      } else {
        console.error("Erro ao atualizar o card");
      }
    } catch (error) {
      console.error("Erro ao atualizar o card", error);
    }
  };

  useEffect(() => {
    dadosJson();
  }, []); 
  return (
    <VideoContext.Provider value={{ dados, setDados, deleteCard, createCard, updateCard }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
