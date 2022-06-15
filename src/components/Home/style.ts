import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--dark-color);

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .cards ol {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    list-style: none;
    gap: 15px;
  }

  .cards ol li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 125px;
    height: 125px;
    border: 1px solid var(--brand-color);
    color: var(--light-color);
    border-radius: 15px;
    transition: 0.5s all;
  }

  .cards ol li:hover {
    transition: 0.5s all;
    background-color: var(--brand-color);
  }

  .cards ol a {
    text-decoration: none;
  }

  .cards ol li .icon i {
    font-size: 50px;
  }

  .cards ol li .span {
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
  }
`
