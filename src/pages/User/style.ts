import styled from 'styled-components'

export const UserContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    padding: 24px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  .container {
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .table {
    width: 100%;
    border: 1px solid #eeeeee;
  }

  .table-header {
    display: flex;
    width: 100%;
    background: #000;
    padding: 18px 0;
  }

  .table-row {
    display: flex;
    width: 100%;
    padding: 18px 0;
  }
  .table-row:nth-of-type(odd) {
    background: #eeeeee;
  }

  .table-data,
  .header__item {
    flex: 1 1 20%;
    text-align: center;
  }

  .header__item {
    text-transform: uppercase;
  }

  .filter__link {
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding-left: 24px;
    padding-right: 24px;
  }
  .filter__link::after {
    content: '';
    position: absolute;
    right: -18px;
    color: white;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
  .filter__link.desc::after {
    content: '(desc)';
  }
  .filter__link.asc::after {
    content: '(asc)';
  }
`
