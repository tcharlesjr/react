import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';


function Media() {

  const { min, max } = useSelector(state => state.numeros);

  return (
    <Card title={ 'Média dos Números' } green>
      <div className={ 'Intervalo' }>
        <span>
          <span>Resultado:</span>
          <strong>{ (max + min) / 2 }</strong>
        </span>
      </div>
    </Card>
  );
}


export default Media;
