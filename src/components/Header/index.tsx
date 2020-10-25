import React from 'react'
import { MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/">Facebook</Link>

        <div className="user-area">
          <span>Meu perfil</span>
          <MdPerson color="#fff" size={24} />
        </div>
      </div>
    </Container>
  )
}

export default Header
