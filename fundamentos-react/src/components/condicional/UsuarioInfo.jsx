import React from 'react';
import  { Se, SeNao } from './Se';


export default function UsuarioInfo(props) {

  const usuario = props.usuario || {};

  return (
    <div>
      <Se test={ usuario && usuario.nome }>
        Seja bem-vindo <strong>{ props.usuario.nome }</strong>!
        <SeNao>
          Seja bem-vindo <strong>Amigão</strong>!
        </SeNao>
      </Se>
    </div>
  );
}
