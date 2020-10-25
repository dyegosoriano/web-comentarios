import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import BoxPost from '../../components/BoxPost'
import Header from '../../components/Header'
import api from '../../services/api'

import { Container, Footer } from './styles'

export interface Post {
  id: number
  message: string
  createdAt: string
  updatedAt: string
}

const Home: React.FC = () => {
  const history = useHistory()

  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)

  async function getAllPosts() {
    try {
      const response = await api.get('posts', { params: { page } })

      setAllPosts([...allPosts, ...response.data])
      setPage(page + 1)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  function handleClick() {
    getAllPosts()
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      <Header />

      <Container>
        {allPosts.map((post: Post) => (
          <Link to={`post/${post.id}`}>
            <BoxPost key={post.id} post={post} />
          </Link>
        ))}
      </Container>

      <Footer>
        <button onClick={handleClick}>Carregar...</button>
        <button onClick={() => history.push('newPost')}>Novo post</button>
      </Footer>
    </>
  )
}

export default Home
