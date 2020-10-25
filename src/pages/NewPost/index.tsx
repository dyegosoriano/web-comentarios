import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'

import api from '../../services/api'

import { Container } from './styles'

const NewPost: React.FC = () => {
  const history = useHistory()

  const [message, setMessage] = useState('')

  async function handleClick() {
    try {
      if (!message) {
        alert('Você precisa preencher a caixa de texto para enviar um post')
        return
      }
      await api.post('posts', { message })

      history.push('/')
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }
  return (
    <>
      <Header />

      <Container>
        <label>Novo post</label>

        <input
          type="text"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <button onClick={handleClick}>Enviar</button>
      </Container>
    </>
  )
}

export default NewPost
