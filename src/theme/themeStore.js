import { createContext, useContext } from 'react'

export const STORAGE_KEY = 'theme'
export const DEFAULT_THEME = 'dark'

export const ThemeContext = createContext(null)

export function readInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }
  return DEFAULT_THEME
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider')
  }
  return context
}
