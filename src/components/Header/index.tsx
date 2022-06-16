import { HeaderContainer } from './style'

interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <header>
        <span>{props.title}</span>
      </header>
    </HeaderContainer>
  )
}
