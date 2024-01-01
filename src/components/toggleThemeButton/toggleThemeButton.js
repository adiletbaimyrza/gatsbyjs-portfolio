import React from 'react'
import { useState, useEffect } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import switchSound from '../../sounds/switch-sound.mp3'

import {
  toggleThemeButton,
  icon,
  iconAnimate,
  iconWrapper,
} from './toggleThemeButton.module.css'

const ToggleThemeButton = () => {
  const initialTheme =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : 'dark'
  const [theme, setTheme] = useState(initialTheme)
  const [isClicked, setIsClicked] = useState(false)
  const audio = typeof window !== 'undefined' ? new Audio(switchSound) : null

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
    setIsClicked(true)
    if (audio) {
      audio.play()
    }
  }

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)

    const timer = setTimeout(() => {
      setIsClicked(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [theme])

  return (
    <button className={toggleThemeButton} onClick={toggleTheme}>
      {theme === 'light' ? (
        <div className={iconWrapper}>
          <DarkModeIcon className={`${icon} ${isClicked ? iconAnimate : ''}`} />
        </div>
      ) : (
        <div className={iconWrapper}>
          <LightModeIcon
            className={`${icon} ${isClicked ? iconAnimate : ''}`}
          />
        </div>
      )}
    </button>
  )
}

export default ToggleThemeButton
