import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


ReactDOM.render(
  <div>
    <h3>Olá mundo!</h3>
    <Primeiro />
    <ComParametro titulo="Situação do aluno" aluno="Joca Silva" nota={9.3}/>
    <ComParametro titulo="Situação do aluno" aluno="Maria Severina" nota={9.8}/>
    <Fragmento />
  </div>,
  document.getElementById('root'),
);
