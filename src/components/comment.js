import React, { useContext, useState } from 'react'
import { ColorContext } from '../context/colorContexts'

const Comment = ({ addComment, formattedDate }) => {
  const { theme } = useContext(ColorContext)

  const [comment, setComment] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (comment.trim() === '') {
      setError('Ingrese un estado de animo de Kasu...')
      return
    }
    setError(null)
    const newComment = {
      id: crypto.randomUUID(),
      text: comment,
      date: formattedDate
    }

    addComment(newComment)
    setComment('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: theme.bg }}>
        <textarea
          style={{ backgroundColor: theme.accent, '--placeholder-color': theme.accent === '#FCE22A' ? 'black' : 'inherit' }}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder='Por ejemplo = Dia X de trabajo de Kasu : Cansada...'
        />
        <button type='submit' style={{ '--hover-color': theme.card }}>Crear nota</button>
        {error && <span className='error'>{error}</span>}
      </form>
    </>
  )
}

export default Comment
