import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import { Container } from './style'

export default function AddUser() {
  function getValues() {
    const nameUser = document.querySelector('.nameUser')
    const emailUser = document.querySelector('.emailUser')

    registerNewUser(nameUser.value, emailUser.value)
  }

  async function registerNewUser(name: any, email: any) {
    const url = `http://127.0.0.1:8000/api/clients?name=${name}&email=${email}`
    const response = await fetch(url, {
      method: 'POST'
    })

    alertUser(response)
  }

  function alertUser(data: any){
    if(data.status === 200){
      alert('Usuário cadastrado com sucesso')
    }else{
      alert('Usuário não cadastrado - Email já cadastrado')	
    }
  }

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
            <input type="text" placeholder="Nome" className="nameUser" />
            <br />
            <input type="email" placeholder="Email" className="emailUser" />
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
