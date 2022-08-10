import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import DesafioNumeroAleatorio from './components/basicos/DesafioNumeroAleatorio';
import Card from './components/layout/Card';
import Famila from './components/basicos/Famila';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formaulario/Input';
import Contador from './components/contador/Contador';
import './App.css';


export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial={ 10 } passoInicial={0}/>
        </Card>

        <Card titulo="#11 - Componente controlado (Input)" color="#E45F56">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação direta" color="#8BAD39">
          <IndiretaPai />
        </Card>

        <Card titulo="#9 - Comunicação direta" color="#59323C">
          <DiretaPai />
        </Card>

        <Card titulo="#8 - Rederização condicional" color="#982395">
          <ParOuImpar numero={ 21 } />
          <UsuarioInfo usuario={ { nome: 'Fernando' } } />
          <UsuarioInfo usuario={ { email: 'fernando@gmail.com' } } />
        </Card>

        <Card titulo="#7 - Repetição Desafio" color="#40E0D0">
          <ListaProdutos> </ListaProdutos>
        </Card>

        <Card titulo="#6 - Repetição" color="#FF4C65">
          <ListaAlunos> </ListaAlunos>
        </Card>

        <Card titulo="#5 - Componentes com filhos" color="#00C8F8">
          <Famila sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="José" />
          </Famila>
        </Card>

        <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
          <DesafioNumeroAleatorio max={ 100 } min={ 1 } />
        </Card>

        <Card titulo="#3 - Componente com fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Componente com parâmetro" color="#E8B71A">
          <ComParametro titulo="Situação do aluno" aluno="Joca Silva" nota={ 9.3 } />
        </Card>

        <Card titulo="#1 - Primeiro componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>

    </div>
  );
}
