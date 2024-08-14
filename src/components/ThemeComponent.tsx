import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
     <p>Current Theme: {theme} </p>
     <button onClick={toggleTheme}>Toggle</button>
    </>
  )
}

export default ThemeComponent