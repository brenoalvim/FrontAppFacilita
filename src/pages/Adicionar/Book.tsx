import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import { useEffect } from 'react'

import { Container } from './style'

export default function AddUser() {
  useEffect(() => {
    async function getGenres() {
      const response = await fetch('http://127.0.0.1:8000/api/genres', {
        method: 'GET',
        redirect: 'follow'
      })
      const responseJson = await response.json()

      renderGenres(responseJson)
    }
    getGenres()

    function renderGenres(data: any) {
      const selectGenre = document.querySelector('.selectGenre')

      for (let i = 0; i < data.length; i++) {
        selectGenre.innerHTML += `
        <option value="${data[i].type}">${data[i].type}</option>
        `
      }
    }
  }, [])

  function getValues() {
    const nameUser = document.querySelector('.nameUser')
    const emailUser = document.querySelector('.emailUser')
    const situationUser = document.querySelector('.situationUser')
    const selectGenre = document.querySelector('.selectGenre')

    registerNewUser(
      nameUser.value,
      emailUser.value,
      situationUser.value,
      selectGenre.value
    )
  }

  async function registerNewUser(
    name: any,
    email: any,
    situation: any,
    genre: any
  ) {
    const url = `http://127.0.0.1:8000/api/books?name=${name}&author=${email}&situation=${situation}&genre=${genre}`
    const response = await fetch(url, {
      method: 'POST'
    })

    alertUser(response)
  }

  function alertUser(data: any) {
    if (data.status === 200) {
      alert('Livro cadastrado com sucesso')
    } else {
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

            <input type="text" placeholder="Autor" className="emailUser" />

            <input
              type="text"
              placeholder="Situação"
              className="situationUser"
            />
            <br />
            <select name="genre" className="selectGenre" id="">
              <option value="0" selected disabled>
                Escolha um Gênero
              </option>
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
