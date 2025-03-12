"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  isSidebarOpen: boolean
  setIsSidebarOpen: (value: boolean) => void
  notifications: number
  setNotifications: (value: number) => void
  messages: number
  setMessages: (value: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [notifications, setNotifications] = useState(2)
  const [messages, setMessages] = useState(0)

  return (
    <AppContext.Provider value={{
      isSidebarOpen,
      setIsSidebarOpen,
      notifications,
      setNotifications,
      messages,
      setMessages
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
} 