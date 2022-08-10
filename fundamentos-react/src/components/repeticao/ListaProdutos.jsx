import React from 'react';
import tabelaProdutos from '../../data/tabelaProdutos';


export default function ListaProdutos(props) {

  const tds = tabelaProdutos.map((produto, i) => {
    return (
      <tr key={ produto.id } style={ i % 2 === 0 ? {backgroundColor: '#ccc'} : {} }>
        <td>{ produto.id }</td>
        <td>{ produto.nome }</td>
        <td>R$ { produto.preco.toFixed(2).replace('.', ',') }</td>
      </tr>
    );
  });

  return (
    <div>
      <table border={ 1 } width={ '100%' }>
        <thead>
          <tr style={{backgroundColor: "#9FE2BF"}}>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          { tds }
        </tbody>
      </table>
    </div>
  );
}
