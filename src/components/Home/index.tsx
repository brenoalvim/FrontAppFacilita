import { HomeContainer } from './style'

export default function Homepage() {
  return (
    <HomeContainer>
      <div className="cards">
        <ol>
          <a href="/User/">
            <li>
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="span">
                <span>Usuários</span>
              </div>
            </li>
          </a>
          <a href="/Book/">
            <li>
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="span">
                <span>Livros</span>
              </div>
            </li>
          </a>
          <a href="/Genre/">
            <li>
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="span">
                <span>Gênero</span>
              </div>
            </li>
          </a>
        </ol>
      </div>
    </HomeContainer>
  )
}
