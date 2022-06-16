import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import { Container } from './style'

export default function AddUser() {
  function getValues() {
    const nameUser = document.querySelector('.nameUser')
    const emailUser = document.querySelector('.emailUser')
    const situationUser = document.querySelector('.situationUser')

    registerNewUser(nameUser.value, emailUser.value, situationUser.value)
  }

  async function registerNewUser(name: any, email: any, situation: any) {
    const url = `http://127.0.0.1:8000/api/books?name=${name}&author=${email}&situation=${situation}`
    const response = await fetch(url, {
      method: 'POST'
    })

    alertUser(response)
  }

  function alertUser(data: any){
    if(data.status === 200){
      alert('Livro cadastrado com sucesso')
    }else{
      alert('Erro ao cadastrar Livro')	
    }
  }

  return (
    <Container>
      <Meta />
      <Link />
      <Title name="Adicionar Livros" />
      <div className="form">
        <div className="modal">
          <div className="title">
            <h1>Adicionar Livro</h1>
          </div>
          <br />
          <div className="inputs">
            <br />
            <input type="text" placeholder="Nome" className="nameUser" />
            <br />
            <input type="text" placeholder="Autor" className="emailUser" />
            <br />
            <input type="text" placeholder="Situação" className="situationUser" />
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
