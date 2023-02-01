import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ColorContext } from '../context/colorContexts'

const Header = () => {
  const { theme, changeTheme } = useContext(ColorContext)

  return (
    <header style={{ backgroundColor: theme.details, color: theme.details === '#EAC7C7' ? 'black' : 'white' }}>
      <Link to='/'>
        <h1>#FreeKasu</h1>
      </Link>

      <nav>
        <button onClick={changeTheme} className='theme'>&#127912;</button>
        <Link to='/comments'>Comentarios</Link>
      </nav>
    </header>
  )
}

export default Header
