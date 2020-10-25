import React, { useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { useParams } from 'react-router-dom'

import BoxComment from '../../components/BoxComment'
import Header from '../../components/Header'
import api from '../../services/api'

import { Post } from '../Home'

import { Container } from './styles'

export interface Comment {
  id: number
  comment: string
  createdAt: string
  updatedAt: string
}

const PostDetails: React.FC = () => {
  const { id }: any = useParams()

  const [comments, setComments] = useState<Comment[]>([])
  const [comment, setComment] = useState('')
  const [post, setPost] = useState<Post>()

  async function getPost() {
    try {
      const response = await api.get(`posts/${id}`)

      setPost(response.data)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  async function getCommentary() {
    try {
      const response = await api.get(`posts/${id}/comments`)

      setComments(response.data)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  async function postNewComment() {
    try {
      if (!comment) {
        alert(
          'Você precisa preencher a caixa de texto para enviar um novo comentário'
        )
        return
      }

      const response = await api.post(`/posts/${id}/comments`, { comment })

      setComments([...comments, response.data])
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  useEffect(() => {
    getPost()
    getCommentary()
  }, [])

  return (
    <>
      <Header />

      <Container>
        <p>{post?.message} </p>

        <div className="new-comment">
          <input
            onChange={event => setComment(event.target.value)}
            placeholder="insira um novo comentário"
            value={comment}
            type="text"
          />

          <button onClick={postNewComment}>
            <MdAdd size={24} color="#fff" />
          </button>
        </div>

        {comments.length !== 0 && <div className="divider" />}

        {comments.map((comment: Comment) => (
          <BoxComment key={comment.id} comment={comment} />
        ))}
      </Container>
    </>
  )
}

export default PostDetails
