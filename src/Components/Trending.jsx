import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../utils/Axios";
import Loader from "../Partials/Loader";
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
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Reset state and fetch new data when category or duration changes
    setPage(1);
    setTrending([]);
    setHasMore(true);
    getTrending();
  }, [category, duration]);

  return (
    <div className="w-full h-full overflow-y-auto scroll-smooth px-20">
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
            func={(e)=>setCategory(e.target.value)}
            options={["all", "tv", "movie"]}
          />
          <div className="w-[10px]"></div>
          <Dropdown
            title="Filter"
            func={(e)=>setDuration(e.target.value)}
            options={["day", "week"]}
          />
        </div>
      </div>
        <Cards data={trending} />
    </div>
  );
};

export default Trending;