import { UserContainer } from './style'

export default function UserIndex() {
  return (
    <UserContainer>
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Name
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Wins
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Draws
            </a>
          </div>
          <div className="header__item">
            <a
              id="losses"
              className="filter__link filter__link--number"
              href="#"
            >
              Losses
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              Total
            </a>
          </div>
        </div>
        <div className="table-content">
          <div className="table-row">
            <div className="table-data">Tom</div>
            <div className="table-data">2</div>
            <div className="table-data">0</div>
            <div className="table-data">1</div>
            <div className="table-data">5</div>
          </div>
          <div className="table-row">
            <div className="table-data">Dick</div>
            <div className="table-data">1</div>
            <div className="table-data">1</div>
            <div className="table-data">2</div>
            <div className="table-data">3</div>
          </div>
          <div className="table-row">
            <div className="table-data">Harry</div>
            <div className="table-data">0</div>
            <div className="table-data">2</div>
            <div className="table-data">2</div>
            <div className="table-data">2</div>
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
    </UserContainer>
  )
}
