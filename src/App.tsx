


import { motion } from 'framer-motion'
import { useThemeStore } from './store/themeStore'
import { useEffect } from 'react'

function App() {
  const dark = useThemeStore((state) => state.dark)
  const toggle = useThemeStore((state) => state.toggle)

  // 👇 THIS IS THE KEY FIX
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors">
      
      <button
        type="button"
        onClick={() => {
          console.log('BUTTON CLICKED')
          toggle()
        }}
        className="fixed top-4 right-4 px-4 py-2 bg-indigo-500 text-white rounded z-50"
      >
        Toggle Theme
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Aiman’s Portfolio ✨
      </motion.h1>
    </div>
  )
}

export default App