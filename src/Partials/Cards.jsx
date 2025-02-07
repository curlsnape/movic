import React from "react";

function Cards({ data }) {
  return (
    <>
    <div className="w-full flex flex-wrap py-10 gap-10 justify-center">
      {data.map((item, index) => {
          return (
              <div key={index} className="card w-[32vh] mb-5  h-[40vh] bg-zinc-100 flex-shrink-0">
            <img
              className="w-full h-full object-cover object-center"
              src={`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.poster_path || item.profile_path
                }`}
                alt=""
                />
            <h4 className="text-xl mt-1 text-center">{item.name || item.title}</h4>
          </div> 
        );
    })}
     
    </div>
     <div className="h-[60px]"></div>
    </>
  );
}

export default Cards;
