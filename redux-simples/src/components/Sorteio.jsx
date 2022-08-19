import React from 'react';
import Card from './Card';


export default function Sorteio(props) {
  return (
    <Card title={ 'Sorteio de um Número' } purple>
      <div className={ 'Intervalo' }>
        <span>
          <span>Resultado:</span>
          <strong>8</strong>
        </span>
      </div>
    </Card>
  );
}
