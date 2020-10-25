import React from 'react'

import { Comment } from '../../pages/PostDetails'

import { Container } from './styles'

interface CommentProps {
  comment: Comment
}

const BoxComment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Container>
      <p>{comment.comment} </p>
    </Container>
  )
}

export default BoxComment
