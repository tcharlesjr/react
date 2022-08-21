import React from 'react';
import './Intervalo.css';
import Card from './Card';
import { minAletrado, maxAletrado } from '../store/Numeros.store';
import { useDispatch, useSelector } from 'react-redux';


function Intervalo() {

  const { min, max } = useSelector(state => state.numeros);

  const dispatch = useDispatch();

  return (
    <Card title={ 'Intervalo de Números' } red>
      <div className={ 'Intervalo' }>
        <span>
          <strong>Mínimo:</strong>
          <input type={ 'number' } value={ min }
                 onChange={ e => dispatch(minAletrado(e.target.value)) } />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type={ 'number' } value={ max }
                 onChange={ e => dispatch(maxAletrado(e.target.value)) } />
        </span>
      </div>
    </Card>
  );
}

export default Intervalo;
