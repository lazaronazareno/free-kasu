import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ColorContext } from '../context/colorContexts'

const Comments = () => {
  const { theme } = useContext(ColorContext)

  let initialComments = JSON.parse(localStorage.getItem('comments'))
  if (!initialComments) {
    initialComments = []
  }

  const [comments, setComments] = useState(initialComments)
  console.log(comments)

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
  return (
    <div style={{ backgroundColor: theme.bg, textAlign: 'center', minHeight: '37.9rem' }}>
      {comments.length > 0
        ? (
          <ul>
            {comments.map((comment) => (
              <div className='li' key={comment.id}>
                <span style={{ backgroundColor: theme.card, color: theme.card === '#F94A29' ? 'white' : 'inherit' }}>
                  {comment.date}
                </span>
                <li style={{ backgroundColor: theme.card, color: theme.card === '#F94A29' ? 'white' : 'inherit' }}>
                  {comment.text}
                </li>
                <button className='delete-button' onClick={() => deleteComment(comment.id)}>X</button>
              </div>
            ))}
          </ul>
          )
        : <h1>No hay Comentarios</h1>}
      <Link to='/' style={{ color: theme.bg === 'black' ? 'white' : 'inherit' }}>Volver</Link>
    </div>
  )
}

export default Comments
