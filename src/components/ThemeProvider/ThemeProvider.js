'use client'
import { useEffect, useState } from 'react'
import ThemeContext from '@/app/context/themeContext'

const ThemeProvider = ({ children }) => {
  const themeFromLocalStorage =
    typeof localStorage !== 'undefined' && localStorage.getItem('theme')
      ? JSON.parse(localStorage.getItem('theme'))
      : false
  const [darkTheme, setDarkTheme] = useState(themeFromLocalStorage)
  const [renderComponent, setRenderComponent] = useState(false)

  useEffect(() => {
    setRenderComponent(true)
  }, [])

  if (!renderComponent) return <></>

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
