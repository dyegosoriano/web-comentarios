import React from 'react'

import Header from '../../components/Header'
import Post from '../../components/Post'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Post />
      </Container>
    </>
  )
}

export default Home
