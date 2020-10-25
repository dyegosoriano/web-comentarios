import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import PostDetails from './pages/PostDetails'
import NewPost from './pages/NewPost'
import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/newPost" exact component={NewPost} />
      <Route path="/post/:id" exact component={PostDetails} />
    </BrowserRouter>
  )
}
