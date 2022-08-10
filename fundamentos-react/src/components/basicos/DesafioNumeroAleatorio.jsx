import React from 'react';


export default function DesafioNumeroAleatorio(props) {

  const randon = Math.floor(Math.random() * (props.max - props.min)) + props.min;

  return (
    <>
      <h4>O número gerado foi: { randon }</h4>
    </>
  );
}
