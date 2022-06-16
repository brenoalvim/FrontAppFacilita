import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import Header from '../../components/Header/index'

import { UserContainer } from './style'

import { useEffect } from 'react'

export default function UserIndex() {
  useEffect(() => {
    async function getUserInfo() {
      const response = await fetch('http://127.0.0.1:8000/api/books', {
        method: 'GET',
        redirect: 'follow'
      })
      const responseJson = await response.json()
      console.log(responseJson)
      renderUserTable(responseJson)
    }

    function renderUserTable(data: any) {
      const tbody = document.querySelector('.tbody')
      for (let i = 0; i < data.length; i++) {
        tbody.innerHTML += `
        <tr>
          <td>${data[i].id}</td>
          <td>${data[i].name}</td>
          <td>${data[i].author}</td>
          <td>${data[i].situation}</td>
        <td>
          <a href="Alterar/Book/${data[i].id}" target="_blank">
            <img src='icon/pen-to-square-solid.svg'/>
          </a>
        </td>
        <td>
          <a href="Remover/Book/${data[i].id}" target="_blank">
            <img src='icon/xmark-solid.svg'/>
          </a>
        </tr>
       `
      }
    }

    getUserInfo()
  }, [])

  function removeUser(id: any) {
    alert(id)
  }
  return (
    <UserContainer>
      <Meta></Meta>
      <Link />
      <Title name="User" />
      <Header title="CRUD Livros" />
      {/* <h2>CRUD usuários</h2> */}
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Nº Registro</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Situação</th>
              <th>Alterar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody className="tbody"></tbody>
        </table>
      </div>
      <a href="Adicionar/Book" target={`_blank`}>
        <button className="addUser">+</button>
      </a>
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
    </UserContainer>
  )
}
