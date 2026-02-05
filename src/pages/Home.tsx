import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Helmet } from 'react-helmet-async';
export default function Home() {
  return (
    <PageWrapper>

    <div className="h-[80vh] flex items-center justify-center">
      <Helmet>
        <title>Aiman's Portfolio</title>
        <meta name="description" content="Welcome to Aiman's Portfolio - Aiman is a frontend developer passionate about building clean, performant, and accessible user interfaces." />
      </Helmet>
      <h1 className="text-4xl font-extrabold transition hover:scale-105">
        Aiman’s Portfolio ✨
      </h1>
    </div>
    </PageWrapper>
  );
}
    
   
   
   
      
      