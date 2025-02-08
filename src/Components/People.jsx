import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from '../Partials/Topnav';
import Cards from '../Partials/Cards';

const People = () => {
    document.title = "Movixer | Celebs";
   
    const navigate = useNavigate()
    const [people, setpeople] = useState([])
    const [hasmore, sethasmore] = useState(true)
    const [page, setpage] = useState(1)
    const getpeoplelist = async () => {
      try {
        const { data } = await axios.get(`/person/popular?page=${page}`)
        if (data.results.length > 0) {
          setpeople((prev) => [...prev, ...data.results])
          setpage((prev) => prev + 1)
        }
        else {
          sethasmore(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
     getpeoplelist()
    },[])
  return (
    <div className="w-full min-h-screen bg-zinc-900  px-20">
    <div className="nav w-full h-[10vh] flex items-center justify-between">
      <div className="logo flex text-xl items-center">
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line text-2xl transition-all hover:text-purple-600 cursor-pointer"
        ></i>
        <h3>Celebs</h3>
      </div>
      <div className="w-[80%] flex items-center">
        <Topnav />
      
      </div>
    </div>
    <InfiniteScroll dataLength={people.length} hasMore={hasmore} next={getpeoplelist} loader={<h1>Loading...</h1>}>
      <Cards data={people} />
    </InfiniteScroll>
  </div>
  )
}

export default People