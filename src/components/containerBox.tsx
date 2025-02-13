import { JSX, Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ContainerContextType {
  container: JSX.Element[]
  setContainer: Dispatch<SetStateAction<JSX.Element[]>>
}

export const Container = createContext<ContainerContextType | null>(null)

export const ContainerProvider = ({ children }: { children: ReactNode }) => {
  const [container, setContainer] = useState<JSX.Element[]>([])

  console.log('Container is loaded successfully!!')
  return (
    <Container.Provider value={{ container, setContainer }}>
      {children}
    </Container.Provider>
  )
}

export const useContainer = () => {
  const context = useContext(Container)
  if (!context) throw new Error('Container is not provided!!')
  return context
}
