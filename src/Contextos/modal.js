import React, { useState, createContext } from "react";

export const ModalContext = createContext();
ModalContext.displayName = 'Modal';

const ModalProvider = ({children}) => {
  const [modalAberto, setModalAberto] = useState(false);
  return (
    <ModalContext.Provider value={{modalAberto, setModalAberto}}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;