import React from "react";
import { Link } from "react-router-dom";

const Horizontalcards = ({ data }) => {
  return (
    <>
      <div className="w-full flex gap-5 overflow-x-scroll pb-5 overflow-y-hidden  h-[45vh] ">
        {data.map((item, index) => {
          return (
            <Link className="card w-[20%] shrink-0 h-[40vh]  overflow-hidden  bg-zinc-800 rounded">
              <div className="img w-full h-[55%] bg-zinc-700">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${
          item.backdrop_path || item.poster_path || item.profile_path
        }`} alt="" />
              </div>
              <div className="text h-[45%] overflow-y-auto p-2">
                <h3 className="text-sm font-semibold">
                  {item.title || item.name}
                </h3>
                <p className="text-sm mt-1 leading-none">
             {item.overview.slice(0,100)}<Link className="text-sm leading-none text-zinc-300">...more</Link>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="h-[3.5vh] w-full"></div>
    </>
  );
};

export default Horizontalcards;
