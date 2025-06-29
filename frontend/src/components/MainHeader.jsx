import React from 'react'
import { motion } from 'framer-motion'

export default function MainHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
    
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="absolute inset-0" style={{ minHeight: 400 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22305a" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
     
        <div className="mb-8 flex flex-col items-center">
         
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="30" rx="28" ry="20" fill="url(#paint0_linear)" />
            <ellipse cx="40" cy="20" rx="6" ry="10" fill="url(#paint0_linear)" />
            <ellipse cx="20" cy="20" rx="6" ry="10" fill="url(#paint0_linear)" />
            <circle cx="30" cy="35" r="6" fill="#fff" />
            <defs>
              <linearGradient id="paint0_linear" x1="10" y1="30" x2="50" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5b8cff" />
                <stop offset="1" stopColor="#a06cff" />
              </linearGradient>
            </defs>
          </svg>
          <span className="block text-3xl font-bold tracking-tight mt-2" style={{fontFamily: 'sans-serif', color: '#222'}}>App<span className="text-blue-500">Rabbit</span></span>
        </div>

       
        <button className="mb-10 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Start now
        </button>

        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#222', fontFamily: 'sans-serif'}}>
          Upgrade your coaching business with an all-in-one, beautiful app
        </h1>

        
        <div className="mt-2">
          <span className="text-gray-700 font-medium text-base sm:text-lg">
            Get your own custom IOS, Android, and web coaching app, in 3 weeks
          </span>
        </div>
      </div>
    </motion.header>
  )
}