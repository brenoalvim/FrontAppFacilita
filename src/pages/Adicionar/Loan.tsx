import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import { useEffect } from 'react'

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

  function getValues() {
    const nameUser = document.querySelector('.nameUser')
    const bookUser = document.querySelector('.bookUser')
    const dateReturn = document.querySelector('.dateReturn')

    console.log(nameUser.value, bookUser.value, dateReturn.value)
    registerNewUser(nameUser.value, bookUser.value, dateReturn.value)
  }

  async function registerNewUser(name: any, book: any, date: any) {
    const url = `http://127.0.0.1:8000/api/loans?user_id=${name}&book_id=${book}&return_date=${date}&status=Dentro do prazo`
    const response = await fetch(url, {
      method: 'POST'
    })

    alertUser(response)
  }

  function alertUser(data: any) {
    if (data.status === 200) {
      alert('Empréstimo cadastrado com sucesso')
    } else {
      alert('ERRO! Empréstimo não cadastrado')
    }
  }

  return (
    <Container>
      <Meta />
      <Link />
      <Title name="Novo Empréstimo" />
      <div className="form">
        <div className="modal">
          <div className="title">
            <h1>Novo Empréstimo</h1>
          </div>
          <br />
          <div className="inputs">
            <br />
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
