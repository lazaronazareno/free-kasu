import React, { useContext } from 'react'
import { ColorContext } from '../context/colorContexts'

const ListComments = ({ comments, deleteComment, formattedDate }) => {
  const { theme } = useContext(ColorContext)

  const newComments = comments.filter(comments => comments.date === formattedDate)
  return (
    <div style={{ backgroundColor: theme.bg }}>
      {newComments
        ? (
          <ul>
            {newComments.map((comment) => (
              <div className='li' key={comment.id}>
                <span style={{ backgroundColor: theme.card, color: theme.card === '#F94A29' ? 'white' : 'inherit' }}>
                  {comment.date}
                </span>
                <li style={{ backgroundColor: theme.card, color: theme.card === '#F94A29' ? 'white' : 'inherit' }}>
                  {comment.text}
                </li>
              </div>
            ))}
          </ul>
          )
        : <span>No hay Comentarios</span>}
    </div>
  )
}

export default ListComments
