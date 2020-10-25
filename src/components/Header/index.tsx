import React from 'react'
import { MdPerson } from 'react-icons/md'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h1>Facebook</h1>

        <div className="user-area">
          <span>Meu perfil</span>
          <MdPerson color="#fff" size={24} />
        </div>
      </div>
    </Container>
  )
}

export default Header
