import Meta from '../../../components/Head/Meta'

import Link from '../../../components/Head/Link'

import Title from '../../../components/Head/Title'

import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { Container } from './style'

export default function AddUser() {
  useEffect(() => {
    async function getUserInfo() {
      const response = await fetch('http://127.0.0.1:8000/api/clients', {
        method: 'GET',
        redirect: 'follow'
      })
      const responseJson = await response.json()
      addDatalist(responseJson)
    }

    function addDatalist(data: any) {
      const userList = document.querySelector('#userList')
      for (let i = 0; i < data.length; i++) {
        userList.innerHTML += `
        <option value="${data[i].name}">${data[i].name}</option>
        `
      }
    }

    getUserInfo()

    async function getBookInfo() {
      const response = await fetch('http://127.0.0.1:8000/api/books', {
        method: 'GET',
        redirect: 'follow'
      })
      const responseJson = await response.json()
      addBookDatalist(responseJson)
    }

    function addBookDatalist(data: any) {
      const userList = document.querySelector('#bookList')
      for (let i = 0; i < data.length; i++) {
        userList.innerHTML += `
        <option value="${data[i].name}">${data[i].name}</option>
        `
      }
    }

    getBookInfo()
  }, [])

  const router = useRouter()

  function getValues() {
    const nameUser = document.querySelector('.nameUser')
    const bookUser = document.querySelector('.bookUser')
    const dateReturn = document.querySelector('.dateReturn')
    const statusLoan = document.querySelector('.statusLoan')

    updateUser(
      nameUser.value,
      bookUser.value,
      dateReturn.value,
      statusLoan.value
    )
  }

  async function updateUser(
    name: any,
    email: any,
    dateReturn: any,
    status: any
  ) {
    const response = await fetch(
      `http://127.0.0.1:8000/api/loans/${router.query.id}?user_id=${name}&book_id=${email}&return_date=${dateReturn}&status=${status}`,
      {
        method: 'PUT',
        redirect: 'follow'
      }
    )
    alertUser(response)
  }

  function alertUser(data: any) {
    const statusLoan = document.querySelector('.statusLoan')
    if (data.status === 200) {
      if (statusLoan.value === 'Devolvido') {
        updateStatusBook()
      }
      alert('Empr??stimo alterado com sucesso')
    } else {
      alert('Erro ao alterar Empr??stimo')
    }
  }

  async function updateStatusBook() {
    const bookUser = document.querySelector('.bookUser')

    const response = await fetch(
      `http://127.0.0.1:8000/api/bookbyname/${bookUser.value}`,
      {
        method: 'GET',
        redirect: 'follow'
      }
    )

    const responseJson = await response.json()

    updateStatus(
      responseJson[0].id,
      responseJson[0].name,
      responseJson[0].author
    )
  }

  async function updateStatus(id: any, name: any, author: any) {
    const response = await fetch(
      `http://127.0.0.1:8000/api/books/${id}?name=${name}&author=${author}&situation=Dispon??vel`,
      {
        method: 'PUT',
        redirect: 'follow'
      }
    )

    if (response.status == 200) {
      console.log('Livro atualizado com sucesso')
    }
  }

  return (
    <Container>
      <Meta />
      <Link />
      <Title name="Alterar Empr??stimo" />
      <div className="form">
        <div className="modal">
          <div className="title">
            <h1>Alterar Empr??stimo</h1>
          </div>
          <br />
          <div className="inputs">
            <input
              list="userList"
              type="text"
              placeholder="Nome"
              className="nameUser"
            />
            <datalist id="userList"></datalist>
            <input
              list="bookList"
              type="text"
              placeholder="Livro"
              className="bookUser"
            />
            <datalist id="bookList"></datalist>
            <input
              type="datetime-local"
              placeholder="Data de retorno"
              className="dateReturn"
            />
            <select className="statusLoan">
              <option value="" selected disabled>
                Status
              </option>
              <option value="Devolvido">Devolvido</option>
              <option value="Atrasado">Atrasado</option>
              <option value="Dentro do prazo">Dentro do Prazo</option>
            </select>
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
