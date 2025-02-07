import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from "../../public/noimg.png";
function Topnav() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);
  const getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data.results);
      setsearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsearches();
  }, [query]);
  return (
    <div className="w-full  font-[quicksand] h-[15vh] flex gap-5 items-center relative mx-auto">
      <i className="ri-search-line text-lg h-6 w-6  flex  justify-center items-center text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        placeholder="Search..."
        className="w-[70%] capitalize relative border-[1px] border-zinc-600 rounded-full py-2 px-5 outline-none "
        type="text"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-line transition-all absolute right-[28%] text-xl h-6 w-6 flex justify-center items-center text-red-600"
        ></i>
      )}
      <div className="searches w-[70%] overflow-auto absolute max-h-[50vh] ml-[4.5%] rounded top-[75%] bg-zinc-300">
        {search && 
          search.map((search, index) => (
            <Link
              key={index}
              className="flex w-full text-zinc-600 transition-all hover:text-black hover:bg-zinc-50 gap-5 border-zinc-400 py-10 items-center px-5 border-b-[1px] "
            >
              <img
                className="h-[25vh] rounded-sm w-[25vh] object-cover"
                src={
                  search.backdrop_path ||
                  search.poster_path ||
                  search.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        search.backdrop_path ||
                        search.poster_path ||
                        search.profile_path
                      }`
                    : noimg
                }
                alt="img"
              />
              <h4 className=" font-semibold text-lg capitalize">
                {search.name || search.title}
              </h4>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Topnav;
