import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

const headerLabels = {
  new_transition: 'Nova Transação'
}

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">
          {headerLabels.new_transition}
        </button>
      </Content>
    </Container>
  )
}