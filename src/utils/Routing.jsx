import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Trending from '../Components/Trending'

function Routing() {
  return (
    <div className='w-full h-full'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/trending' element={<Trending/>}/>
        </Routes>
    </div>
  )
}

export default Routing 