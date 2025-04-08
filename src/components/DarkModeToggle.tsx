'use client'
import { Form } from 'react-bootstrap'
import { useLayoutEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [ darkMode, setDarkMode ] = useState<boolean>(false)

  useLayoutEffect(() => {
    // Initializes dark mode based on the user's preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
      changeColorMode(true)
    }
  }, [])

  const changeColorMode = (dark: boolean) => {
    if (dark) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {  
      document.documentElement.removeAttribute('data-bs-theme')
    }
    setDarkMode(dark)
  }

  return (
    <Form.Check
      type="switch"
      id="dark-mode-switch"
      label="Dark Mode"
      checked={darkMode}
      onChange={e => changeColorMode(e.target.checked)}
    />
  )
}