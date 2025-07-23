import React from 'react'
import Navbar from './Componets/Header.jsx/Navbar'
import Sidebar from './Componets/Header.jsx/Sidebar'

function App() {
  return (
    <div className=''>
     <Navbar/>
     <div className='flex mt-4'>
        <Sidebar />
        <h1>video render here...</h1>
     </div>
    </div>
  )
}

export default App
