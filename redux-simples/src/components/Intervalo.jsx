import React from 'react';
import './Intervalo.css';
import Card from './Card';
import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros';


function Intervalo(props) {

  const { min, max, alterarMinimo, alterarMaximo } = props;


  return (
    <Card title={ 'Intervalo de Números' } red>
      <div className={ 'Intervalo' }>
        <span>
          <strong>Mínimo:</strong>
          <input type={ 'number' } value={ min }
                 onChange={ e => alterarMinimo(+e.target.value) } />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type={ 'number' } value={ max }
                 onChange={ e => alterarMaximo(+e.target.value) } />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProp(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      //Action Creator -> Action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      //Action Creator -> Action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProp, mapDispatchToProps)(Intervalo);
