import React, { createContext, useState } from 'react'

const themes = {
  theme1: {
    bg: '#20262E',
    details: '#913175',
    accent: '#CD5888',
    card: '#E9E8E8'
  },
  theme2: {
    bg: '#30E3DF',
    details: '#D61355',
    accent: '#FCE22A',
    card: '#F94A29'
  },
  theme3: {
    bg: '#F5F5F5',
    details: '#5D3891',
    accent: '#F99417',
    card: '#E8E2E2'
  },
  theme4: {
    bg: '#FAECD6',
    details: '#820000',
    accent: '#4E6C50',
    card: '#F2DEBA'
  },
  theme5: {
    bg: '#EAE0DA',
    details: '#EAC7C7',
    accent: '#A0C3D2',
    card: '#F7F5EB'
  }
}

export const ColorContext = createContext({
  theme: themes.theme1,
  changeTheme: () => {}
})

export default function ColorProvider ({ children }) {
  const [theme, setTheme] = useState(themes.theme1)

  const changeTheme = () => {
    if (theme === themes.theme1) {
      setTheme(themes.theme2)
    } else if (theme === themes.theme2) {
      setTheme(themes.theme3)
    } else if (theme === themes.theme3) {
      setTheme(themes.theme4)
    } else if (theme === themes.theme4) {
      setTheme(themes.theme5)
    } else {
      setTheme(themes.theme1)
    }
  }

  return (
    <ColorContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ColorContext.Provider>
  )
}
