import React from 'react'
import { useState, useEffect } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import switchSound from '../sounds/switch-sound.mp3'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

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
    <ThemeToggler onClick={toggleTheme}>
      {theme === 'light' ? (
        <IconWrapper>
          <DarkModeIcon
            css={css`
              ${icon}
              ${isClicked && animateIcon}
            `}
          />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <LightModeIcon
            css={css`
              ${icon}
              ${isClicked && animateIcon}
            `}
          />
        </IconWrapper>
      )}
    </ThemeToggler>
  )
}

export default ToggleThemeButton

const ThemeToggler = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconWrapper = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--card-bg-color);
  }
`

const icon = css`
  font-size: 1.3rem;
  color: var(--toggle-theme-icon-color);

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const zoomIn = keyframes`
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
`

const animateIcon = css`
  animation: ${zoomIn} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`
