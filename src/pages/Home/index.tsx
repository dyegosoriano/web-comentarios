import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import BoxPost from '../../components/BoxPost'
import Header from '../../components/Header'
import api from '../../services/api'

import { Container } from './styles'

export interface Post {
  id: number
  message: string
  createdAt: string
  updatedAt: string
}

const Home: React.FC = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([])

  async function getAllPosts() {
    try {
      const response = await api.get('posts')

      setAllPosts([...allPosts, ...response.data])
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
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
    </>
  )
}

export default Home
