import React from 'react'

import Comment from '../Comment'

import { Container } from './styles'

const Post: React.FC = () => {
  return (
    <Container>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sint
        ex cupiditate officiis, veritatis quaerat voluptate ducimus eligendi!
        Soluta, rem facilis eum velit debitis id. Vero laudantium ad nobis quae.
      </p>

      <Comment />
    </Container>
  )
}

export default Post
