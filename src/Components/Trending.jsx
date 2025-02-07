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
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const [trending, settrending] = useState([]);
  const gettrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshhandler = () => {
    if (trending.length === 0) {
      gettrending();
    } else {
      setpage(1);
      settrending([]);
      gettrending();
    }
  };

  useEffect(() => {
    // gettrending();
    refreshhandler();
  }, [category, duration]);
  return trending ? (
    <div className="w-full h-full overflow-y-auto scroll-smooth px-20 font-[figtree]">
      <div className="nav w-full h-[10vh] flex  items-center justify-between">
        <div className="logo flex text-xl items-center">
          <i
            onClick={() => navigate("/")}
            class="ri-arrow-left-s-line text-2xl transition-all hover:text-purple-600 "
          ></i>
          <h3>Trending</h3>
        </div>
        <div className="w-[80%] flex items-center">
          <Topnav />
          <Dropdown
            title="Filter"
            func={setcategory}
            options={["all", "tv", "movie"]}
          />
          <div className="w-[10px]"></div>
          <Dropdown
            title="Filter"
            func={setduration}
            options={["day", "week"]}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={gettrending}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
