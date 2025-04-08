'use client'
import { createContext, useEffect, useContext, useState } from "react"
import { ColorsContextType } from "../lib/types"
import { getRandomColor } from "../lib/utils"

const ColorsContext = createContext<ColorsContextType>({
  colors: [],
  setColors: () => {}
})

export const useColors = () => {
  const context = useContext(ColorsContext)
  
  return context
}

export const ColorsProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState<string[]>([])

  useEffect(() => {
    setColors([getRandomColor(), getRandomColor()])
  }, [])

  return (
    <ColorsContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorsContext.Provider>
  )
}