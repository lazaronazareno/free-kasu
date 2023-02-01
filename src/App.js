import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Comment from './components/comment'
import Countdown from './components/countdown'
import Header from './components/header'
import ListComments from './components/listComments'
import ColorProvider, { ColorContext } from './context/colorContexts'
import Comments from './pages/comments'

function App () {
  const { theme } = useContext(ColorContext)
  console.log(theme)

  let initialComments = JSON.parse(localStorage.getItem('comments'))
  if (!initialComments) {
    initialComments = []
  }

  const [comments, setComments] = useState(initialComments)

  const addComment = (comment) => {
    setComments([...comments, comment])
  }

  const deleteComment = (id) => {
    const newComments = comments.filter(comment => comment.id !== id)
    console.log(newComments)
    setComments(newComments)
  }

  useEffect(() => {
    if (initialComments) {
      localStorage.setItem('comments', JSON.stringify(comments))
    } else {
      localStorage.setItem('comments', JSON.stringify([]))
    }
  }, [comments])

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return (
    <ColorProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact path='/' element={
              <>
                <Countdown />
                <Comment formattedDate={formattedDate} addComment={addComment} />
                <ListComments formattedDate={formattedDate} comments={comments} />
              </>
            }
          />
          <Route exact path='/comments' element={<Comments comments={comments} deleteComment={deleteComment} />} />
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  )
}

export default App
