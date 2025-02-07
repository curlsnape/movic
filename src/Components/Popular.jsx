import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from '../Partials/Cards';
import Topnav from '../Partials/Topnav';
import Dropdown from '../Partials/Dropdown';

const Popular = () => {
    const navigate = useNavigate();
  const [category, setCategory] = useState("tv");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [popular, setpopular] = useState([]);
  const getpopular = async () => {
    try {
      const { data } = await axios.get(
        `/${category}/popular?page=${page}`
      );
      console.log(data)
     if(data.results.length>0){
       setpopular((prev) => [...prev, ...data.results]);
       setPage((prevPage) => prevPage + 1);
     }
     else{
      setHasMore(false)
     }

    } catch (error) {
      console.log(error);
    }
  };
    const refereshHandler = () => {
      if (popular.length === 0) {
        getpopular()
      }
      else {
        setPage(1)
        setpopular([])
        getpopular()
      }
    }
    useEffect(() => {
      refereshHandler()
    }, [category]);
  return (
    <div className="w-full min-h-screen bg-zinc-900  px-20">
      <div className="nav w-full h-[10vh] flex items-center justify-between">
        <div className="logo flex text-xl items-center">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-s-line text-2xl transition-all hover:text-purple-600 cursor-pointer"
          ></i>
          <h3>Trending</h3>
        </div>
        <div className="w-[80%] flex items-center">
          <Topnav />
          <Dropdown
            title="Filter"
            func={setCategory}
            options={["tv", "movie"]}
          />
          <div className="w-[10px]"></div>
       
        </div>
      </div>
      <InfiniteScroll dataLength={popular.length} hasMore={hasMore} next={getpopular} loader={<h1>Loading...</h1>}>
        <Cards data={popular} />
      </InfiniteScroll>
    </div>
  )
}

export default Popular