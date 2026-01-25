import { motion } from 'framer-motion'

export default function Home(){
    return(
      <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
    
    
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Aiman’s Portfolio ✨
      </motion.h1>
   
   
      
      </section>

      
      
    )
}