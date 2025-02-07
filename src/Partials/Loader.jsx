import React from 'react'

function Loader() {
  return (
    <div className='w-full h-full flex justify-center flex-col bg-black items-center'>
        <img className='w-[50%] h-[50%] object-contain' src="https://i.pinimg.com/originals/4e/d0/ce/4ed0ced35bb59c608dd31d8b2860a986.gif" alt="" />
        <h2 className='text-6xl text-center font-semibold font-[figtree] capitalize'>loading...</h2>
    </div>
  )
}

export default Loader