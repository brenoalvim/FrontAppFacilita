import Meta from '../../../components/Head/Meta'

import Link from '../../../components/Head/Link'

import Title from '../../../components/Head/Title'

import { useRouter } from 'next/router'

import { Container } from './style'

export default function AddUser() {
  const router = useRouter()

  function getValues() {
    const nameUser = document.querySelector('.nameUser')

    updateUser(nameUser.value)
  }

  async function updateUser(name: any) {
    const response = await fetch(
      `http://127.0.0.1:8000/api/genres/${router.query.id}?type=${name}`,
      {
        method: 'PUT',
        redirect: 'follow'
      }
    )
    alertUser(response)
  }

  function alertUser(data: any) {
    if (data.status === 200) {
      alert('Gênero alterado com sucesso')
    } else {
      alert('Gênero ao alterar usuário')
    }
  }

  return (
    <Container>
      <Meta />
      <Link />
      <Title name="Alterar Usuário" />
      <div className="form">
        <div className="modal">
          <div className="title">
            <h1>Alterar Gênero</h1>
          </div>
          <br />
          <div className="inputs">
            <br />
            <input type="text" placeholder="Nome" className="nameUser" />
            <br />
            <button onClick={getValues}>Alterar</button>
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
