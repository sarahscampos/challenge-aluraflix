import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import Inicio from 'pages/Inicio';
import NovoVideo from 'pages/NovoVideo';

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<Inicio />}/>
            <Route path='novovideo' element={<NovoVideo />}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
      
    </>
  );
}

export default AppRoutes;
