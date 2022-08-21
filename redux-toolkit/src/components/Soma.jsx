import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';


function Soma() {

  const { min, max } = useSelector(state => state.numeros);

  return (
    <Card title={ 'Soma dos Números' } blue>
      <div className={ 'Intervalo' }>
        <span>
          <span>Resultado:</span>
          <strong>{ min + max }</strong>
        </span>
      </div>
    </Card>
  );
}


export default Soma;
