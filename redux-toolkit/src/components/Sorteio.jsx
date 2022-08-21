import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';


function Sorteio() {

  const { min, max } = useSelector(state => state.numeros);

  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title={ 'Sorteio de um Número' } purple>
      <div className={ 'Intervalo' }>
        <span>
          <span>Resultado:</span>
          <strong>{ aleatorio }</strong>
        </span>
      </div>
    </Card>
  );
}


export default Sorteio;
