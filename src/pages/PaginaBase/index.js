import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {

  return (
    <>
    <Header/>
      <Outlet/>
    <Footer />
    </>
  );
}

export default PaginaBase;