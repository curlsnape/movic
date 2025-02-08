import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Topnav from '../Partials/Topnav';
import Dropdown from '../Partials/Dropdown';
import Cards from '../Partials/Cards';

const Movies = () => {
  document.title = "Movixer | Movies";
  const [category, setcategory] = useState("now_playing")
  const navigate = useNavigate()
  const [movies, setmovies] = useState([])
  const [hasmore, sethasmore] = useState(true)
  const [page, setpage] = useState(1)
  const getmovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`)
      if (data.results.length > 0) {
        setmovies((prev) => [...prev, ...data.results])
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
    if(movies.length===0){
      getmovies()
    }
    else{
      setpage(1)
      setmovies([])
      getmovies()
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
          <h3>Movie List <span className='text-xs'>{category}</span></h3>
        </div>
        <div className="w-[80%] flex items-center">
          <Topnav />
          <Dropdown
            title="Filter"
            func={setcategory}
            options={["now_playing", "popular", "top_rated", "upcoming"]}
          />

        </div>
      </div>
      <InfiniteScroll dataLength={movies.length} hasMore={hasmore} next={getmovies} loader={<h1>Loading...</h1>}>
        <Cards data={movies} />
      </InfiniteScroll>
    </div>
  )
}

export default Movies