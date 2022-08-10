import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import DesafioNumeroAleatorio from './components/basicos/DesafioNumeroAleatorio';


export default (props) => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <DesafioNumeroAleatorio max={100} min={1} />
      <Fragmento />
      <ComParametro titulo="Situação do aluno" aluno="Joca Silva" nota={ 9.3 } />
      <Primeiro />
    </div>
  );
}
