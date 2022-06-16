import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5vh;
  background-color: var(--dark-color);
  color: var(--light-color);
  font-family: 'roboto', sans-serif;
  font-size: 25px;
  font-weight: bold;

  a button{
    background-color: var(--dark-color);
    color: var(--light-color);
    border: none;
    cursor: pointer;
  }
`
