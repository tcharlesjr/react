import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


export default function Menu(props) {
  return (
    <aside className={ 'Menu' }>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/param/123">Param #1</Link>
          </li>
          <li>
            <Link to="/param/legal">Param #2</Link>
          </li>
          <li>
            <Link to="/nao-existe">Não Existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
