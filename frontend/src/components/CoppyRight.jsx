import React from 'react'

export default function CoppyRight() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent flex flex-col items-center justify-center">
     
      <div className="mb-4 flex flex-col items-center">
       
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#4F8CFF" />
          <path d="M16 25l6 6 10-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="block text-2xl font-bold tracking-tight mt-2" style={{fontFamily: 'sans-serif', color: '#4F8CFF'}}>Follow<span className="text-gray-800">Up</span></span>
      </div>
      
      <div className="flex items-center space-x-2 text-center">
        <a href="#" className="text-gray-700 text-base font-medium hover:underline">Privacy Policy</a>
        <span className="text-gray-700 text-base font-medium">|</span>
        <a href="#" className="text-gray-700 text-base font-medium hover:underline">Terms & Conditions</a>
      </div>
    </footer>
  )
}