import React from 'react'

import { Container } from './styles'

interface PostItem {
  id: number
  message: string
  createdAt: string
  updatedAt: string
}

interface PostItemProps {
  post: PostItem
}

const Post: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Container>
      <p>{post.message}</p>
    </Container>
  )
}

export default Post
