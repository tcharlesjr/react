import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

// Reducer
import { initialState, reducer } from '../../store';

// Actions
import { login, numberAdd2 } from '../../store/actions';


const UseReducer = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (<div className="UseReducer">
    <PageTitle
      title="Hook UseReducer"
      subtitle="Uma outra forma de ter estado em componentes funcionais!"
    />

    <div className={ 'center' }>
      { state.user
        ? <span className={ 'text' }>{ state.user.name }</span>
        : <span className={ 'text' }>Sem usuário</span>
      }
      <span className={ 'text' }>{ state.number }</span>
      <div>
        <button className={ 'btn' }
                onClick={ _ => numberAdd2(dispatch) }>
          +2
        </button>
        <button className={ 'btn' }
                onClick={ _ => login(dispatch, 'João') }>
          Login
        </button>
        <button className={ 'btn' }
                onClick={ _ => dispatch({ type: 'mult7' }) }>
          x 7
        </button>
        <button className={ 'btn' }
                onClick={ _ => dispatch({ type: 'div25' }) }>
          / 25
        </button>
        <button className={ 'btn' }
                onClick={ _ => dispatch({ type: 'inter' }) }>
          = Int
        </button>
        <button className={ 'btn' }
                onClick={ _ => dispatch({ type: 'addn', payload: 100 }) }>
          + 100
        </button>
      </div>
    </div>

  </div>);
};

export default UseReducer;
