import React from 'react'
import Navbar from './Componets/Header.jsx/Navbar'
import Sidebar from './Componets/Header.jsx/Sidebar'
import Feed from './Componets/Home.jsx/Feed'

function App() {
  return (
    <div className=''>
     <Navbar/>
     <div className='flex mt-16'>
        <Sidebar />
        <div>
          <Feed/>
          feed
        </div>
     </div>
    </div>
  )
}

export default App
