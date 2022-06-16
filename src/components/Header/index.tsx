import { HeaderContainer } from './style'

interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <a href="/">
        <button>{`Home`}</button>
      </a>
      <header>
        <span>{props.title}</span>
      </header>
    </HeaderContainer>
  )
}
