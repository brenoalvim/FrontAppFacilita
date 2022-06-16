import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import Header from '../../components/Header/index'

import { Container } from './style'

export default function AddUser() {
  return (
    <Container>
      <Meta />
      <Link />
      <Title name="Adicionar Usuário" />
      <div className="form">
        <div className="modal">
          <div className="title">
            <h1>Adicionar Usuário</h1>
          </div>
          <br />
          <div className="inputs">
            <br />
            <input type="text" placeholder="Nome" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <button>Cadastrar</button>
          </div>
          <div className="alert">
            <span>
              <strong>Atenção!</strong>
            </span>
          </div>
        </div>
      </div>
      <style global>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          :root {
              --brand-color: #1fb2a7;
              --dark-color: #0b0e16;
              --mid-color: #a4a5a8;
              --light-color: #ffffff;
          }
        `}
      </style>
    </Container>
  )
}
