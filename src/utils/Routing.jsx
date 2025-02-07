import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Trending from '../Components/Trending'
import Popular from '../Components/Popular'
import Movies from '../Components/Movies'

function Routing() {
  return (
    <div className='w-full h-full'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>
    </div>
  )
}

export default Routing 