import React from "react";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <>
      <div className="w-full flex flex-wrap py-10 gap-10 justify-center">
        {data.map((item, index) => {
          return (
            <Link key={index} className="card relative w-[32vh] mb-5  h-[40vh] bg-zinc-100 flex-shrink-0">
              <img
                className="w-full h-full object-cover object-center"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path || item.profile_path
                  }`}
                alt=""
              />
              <h4 className="text-xl mt-1 text-center">{item.name || item.title}</h4>
              <div className="absolute w-10 flex justify-center right-[0%] bottom-0 items-center h-10 bg-amber-500 rounded-full text-white font-semibold text-sm">
                {Math.floor(item.vote_average * 10)}%
              </div>
            </Link>
          );
        })}

      </div>
      <div className="h-[60px]"></div>
    </>
  );
}

export default Cards;
