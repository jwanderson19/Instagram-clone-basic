import React from 'react';
import Header from './component/header'
import Perfil from './component/perfil'
import Publications from './component/publications'
import Footer from './component/footer/index'

import './styles.css'
const App = ()=> {
  
  return (
    <>
      <Header />
      <Perfil />
      <Publications />
      <Footer />
    </>
  );

}

export default App;
