import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import Header from '../../components/Header'
import Post from '../../components/Post'

import { Container } from './styles'

interface Post {
  id: number
  message: string
  createdAt: string
  updatedAt: string
}

const Home: React.FC = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([])

  useEffect(() => {
    async function getAllPosts() {
      try {
        const response = await api.get('posts')

        setAllPosts([...allPosts, ...response.data])
      } catch (error) {
        console.log(`error.message >>> ${error.message} <<<`)
      }
    }

    getAllPosts()
  }, [])

  return (
    <>
      <Header />

      <Container>
        {allPosts.map((post: Post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    </>
  )
}

export default Home
