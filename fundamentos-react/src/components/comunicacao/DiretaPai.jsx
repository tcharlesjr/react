import React from 'react';
import DiretaFilho from './DiretaFilho';


export default function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Júnior" idade={20} nerd={true}/>
      <DiretaFilho nome="Gabriel" idade={30} nerd={false}/>
    </div>
  );
}
