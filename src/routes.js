import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import Inicio from 'pages/Inicio';
import NovoVideo from 'pages/NovoVideo';
import ModalProvider from 'Contextos/modal';
import VideoProvider from 'Contextos/video';



function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<VideoProvider><Inicio /></VideoProvider>}/>
            <Route path='novovideo' element={<VideoProvider><NovoVideo /></VideoProvider>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
      
    </>
  );
}

export default AppRoutes;
