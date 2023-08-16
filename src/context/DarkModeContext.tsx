import { useState, createContext, useContext, ReactNode } from 'react'

interface DarkModeContextValue {
  darkMode: boolean
  toggleDarkMode: () => void
}

interface DarkModeProviderProps {
  children: ReactNode
}

const DarkModeContext = createContext<DarkModeContextValue | undefined>(
  undefined
)

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    console.log('clicked')
    console.log(darkMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => useContext(DarkModeContext)
