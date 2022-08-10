import React from 'react';


export default function IndiretaFilho(props) {

  const cb = props.quandoClicar;

  return (
    <div>
      <div>Filho</div>
      <button onClick={ _ => cb('Joca', 55, true) }>
        Fornecer Informações
      </button>
    </div>
  );
}
