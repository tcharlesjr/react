import React from 'react';
import './Content.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../views/exemples/Home';
import About from '../../views/exemples/About';
import Param from '../../views/exemples/Param';
import NotFound from '../../views/exemples/NotFound';


export default function Content(props) {
  return (
    <main className={ 'Content' }>
      <Routes>
        <Route path="/about" element={ <About /> } />
        <Route path="/param/:id" element={ <Param /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </main>
  );
}
