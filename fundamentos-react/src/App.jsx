import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import DesafioNumeroAleatorio from './components/basicos/DesafioNumeroAleatorio';
import Card from './components/layout/Card';
import './App.css';


export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
          <DesafioNumeroAleatorio max={ 100 } min={ 1 } />
        </Card>

        <Card titulo="#3 - Componente com fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Componente com parâmetro" color="#E8B71A">
          <ComParametro titulo="Situação do aluno" aluno="Joca Silva" nota={ 9.3 } />
        </Card>

        <Card titulo="#1 - Primeiro componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>

    </div>
  );
}
