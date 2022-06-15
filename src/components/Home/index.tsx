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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </HomeContainer>
  )
}
