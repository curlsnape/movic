import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        })`,
        backgroundPosition: "top:40%",
        backgroundSize: "cover",
      }}
      className="w-full flex flex-col justify-end items-start pb-[3%] px-10 rounded h-[60vh]"
    >
      <div className="text w-[70%] ">
        <h2 className="text-5xl  font-bold capitalize">
          {data.name || data.title}
        </h2>
        <div className="flex my-2 gap-5 items-center">
          <span className="capitalize text-sm font-medium">
            {data.media_type}
          </span>
          <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
          <span className="capitalize text-sm font-medium">
            {data.release_date || data.first_air_date}
          </span>
          {data.adult === "true" ? (
            <span className="h-5 w-6  rounded-sm bg-red-500 text-xs flex justify-center items-center">
              18+
            </span>
          ) : (
            <span className="h-5 w-6  rounded-sm bg-green-500 text-xs flex justify-center items-center">
              12+
            </span>
          )}
        </div>
        <p className="leading-4 my-2 text-sm font-medium">
          {data?.overview?.length > 200
            ? `${data.overview.slice(0, 200)}...`
            : data?.overview}
          {data?.overview?.length > 200 && (
            <Link className="text-sm text-zinc-300">more</Link>
          )}
        </p>
        <button className="py-2 mt-2 px-5 rounded bg-red-500 text-sm font-semibold text-white ">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Header;
