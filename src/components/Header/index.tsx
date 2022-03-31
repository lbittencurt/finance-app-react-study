import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

const headerLabels = {
  new_transition: 'Nova Transação'
}

interface HeaderProps {
  onOpenNewTransitionModal: () => void
}

export function Header({ onOpenNewTransitionModal  }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransitionModal}>
          {headerLabels.new_transition}
        </button>
      </Content>
    </Container>
  )
}