import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
     if(data.results.length>0){
       setTrending((prev) => [...prev, ...data.results]);
       setPage((prevPage) => prevPage + 1);
     }
     else{
      hasMore(false)
     }

    } catch (error) {
      console.log(error);
    }
  };
  const refereshHandler = () => {
    if (trending.length === 0) {
      getTrending()
    }
    else {
      setPage(1)
      setTrending([])
      getTrending()
    }
  }
  useEffect(() => {
    refereshHandler()
  }, [category, duration]);

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
            func={(e) => setCategory(e.target.value)}
            options={["all", "tv", "movie"]}
          />
          <div className="w-[10px]"></div>
          <Dropdown
            title="Duration"
            func={(e) => setDuration(e.target.value)}
            options={["day", "week"]}
          />
        </div>
      </div>
      <InfiniteScroll dataLength={trending.length} hasMore={hasMore} next={getTrending} loader={<h1>Loading...</h1>}>
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  );
};

export default Trending;
