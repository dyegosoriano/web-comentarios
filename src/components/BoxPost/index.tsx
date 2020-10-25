import React from 'react'

import { Post } from '../../pages/Home'

import { Container } from './styles'

interface PostProps {
  post: Post
}

const BoxPost: React.FC<PostProps> = ({ post }) => {
  return (
    <Container>
      <p>{post.message}</p>
    </Container>
  )
}

export default BoxPost
