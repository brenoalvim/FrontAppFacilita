import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--dark-color);

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 375px;
    height: 100%;
    background-color: var(--light-color);
    border-radius: 10px;
    text-align: center;
    padding: 15px;
  }

  .inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .inputs input {
    width: 375px;
    height: 25px;
    margin-bottom: 15px;
  }
  
  .inputs select {
    width: 375px;
    height: 25px;
    margin-bottom: 15px;
  }

  button {
    width: 375px;
    height: 25px;
    border: none;
    background-color: var(--brand-color);
    color: var(--dark-color);
    font-weight: bold;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  }
`
