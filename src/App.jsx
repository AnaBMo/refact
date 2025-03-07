import { useState } from 'react'
import Employees from './components/Employees'
import Header from './components/Header'
import Footer from './components/Footer'
import Calculadora from './components/Calculadora'

import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <Calculadora></Calculadora>
      <Employees></Employees>
      <Footer></Footer>
    </>
  );
};

export default App;
