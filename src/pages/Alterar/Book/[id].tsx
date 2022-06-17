import Meta from '../../../components/Head/Meta'

import Link from '../../../components/Head/Link'

import Title from '../../../components/Head/Title'

import { useRouter } from 'next/router'

import { Container } from './style'

export default function AddUser() {
  const router = useRouter()

  function getValues() {
    const nameUser = document.querySelector('.nameUser')
    const emailUser = document.querySelector('.emailUser')
    const situationUser = document.querySelector('.situationUser')

    updateUser(nameUser.value, emailUser.value, situationUser.value)
  }

  async function updateUser(name: any, email: any, situation: any) {
    const response = await fetch(
      `http://127.0.0.1:8000/api/books/${router.query.id}?name=${name}&author=${email}&situation=${situation}`,
      {
        method: 'PUT',
        redirect: 'follow'
      }
    )
    alertUser(response)
  }

  function alertUser(data: any) {
    if (data.status === 200) {
      alert('Livro alterado com sucesso')
    } else {
      alert('Erro ao alterar Livro')
    }
  }

  return (
    <Container>
      <Meta />
      <Link />
      <Title name="Alterar Livro" />
      <div className="form">
        <div className="modal">
          <div className="title">
            <h1>Alterar Livro</h1>
          </div>
          <br />
          <div className="inputs">
            <br />
            <input type="text" placeholder="Nome" className="nameUser" />
            <br />
            <input type="text" placeholder="Autor" className="emailUser" />
            <br />
            <input list="situationList" type="text" placeholder="Situação" className="situationUser" />
            <datalist id="situationList">
              <option value="Disponível"></option>
              <option value="Emprestado"></option>
            </datalist>
            <br />
            <button onClick={getValues}>Cadastrar</button>
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
