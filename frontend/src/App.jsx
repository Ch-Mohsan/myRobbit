import React from 'react'
import MainHeader from './components/MainHeader'
import TimeDetails from './components/TimeDetails'
import Cards from './components/Cards'
import CoppyRight from './components/CoppyRight'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='relative'>
        <div className='relative z-10'>
          <MainHeader/>
          <TimeDetails/>
          <Cards/>
          <FAQ/>
          <CoppyRight/>
        </div>
      </div>
    </div>
  )
}

export default App