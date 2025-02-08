import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from '../Partials/Cards';
import Dropdown from '../Partials/Dropdown';
import Topnav from '../Partials/Topnav';

const Tv = () => {
    document.title = "Movixer | TV Shows";
    const [category, setcategory] = useState("airing_today")
    const navigate = useNavigate()
    const [tvshows, settvshows] = useState([])
    const [hasmore, sethasmore] = useState(true)
    const [page, setpage] = useState(1)
    const gettvshows = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`)
        if (data.results.length > 0) {
          settvshows((prev) => [...prev, ...data.results])
          setpage((prev) => prev + 1)
        }
        else {
          sethasmore(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    const refreshHandler = () =>{
      if(tvshows.length===0){
        gettvshows()
      }
      else{
        setpage(1)
        settvshows([])
        gettvshows()
      }
    }
    useEffect(() => {
      refreshHandler()
    }, [category])
  return (
    <div className="w-full min-h-screen bg-zinc-900  px-20">
    <div className="nav w-full h-[10vh] flex items-center justify-between">
      <div className="logo flex text-xl items-center">
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line text-2xl transition-all hover:text-purple-600 cursor-pointer"
        ></i>
        <h3>Tv shows <span className='text-xs'>{category}</span></h3>
      </div>
      <div className="w-[80%] flex items-center">
        <Topnav />
        <Dropdown
          title="Filter"
          func={setcategory}
          options={["airing_today", "popular", "on_the_air", "top_rated"]}
        />

      </div>
    </div>
    <InfiniteScroll dataLength={tvshows.length} hasMore={hasmore} next={gettvshows} loader={<h1>Loading...</h1>}>
      <Cards data={tvshows} />
    </InfiniteScroll>
  </div>
  )
}

export default Tv