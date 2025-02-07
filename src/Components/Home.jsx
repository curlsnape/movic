import React, { useEffect, useState } from "react";
import Sidenvabar from "../Partials/Sidenvabar";
import Topnav from "../Partials/Topnav";
import Header from "../Partials/Header";
import axios from "../utils/Axios";
import Dropdown from "../Partials/Dropdown";
import Horizontalcards from "../Partials/Horizontalcards";
import Loader from "../Partials/Loader";

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const options = ["all", "tv", "movie"]; 
  const getwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const random =
        data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(random);
    } catch (error) {
      console.log(error);
    }
  };
  const gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!wallpaper) {
      getwallpaper();
    }
    gettrending();
  }, [category]); // Runs whenever wallpaper is updated (including when it's null)

  return wallpaper && trending ? (
    <div className="w-full h-full flex">
      <Sidenvabar />
      <div className="home w-[80%] overflow-x-hidden overflow-y-auto h-full">
        <div className="w-[90%] mx-auto h-full ">
          <Topnav />
          <Header data={wallpaper} />
          <div className="w-full justify-between py-3  flex">
            <h3 className=" font-semibold text-2xl ">
              Buzzing Now
            </h3>
            <Dropdown title="Filter" func={(e)=>setcategory(e.target.value)} options={["all", "tv", "movie"]} />
          </div>
          <Horizontalcards data={trending} />
        </div>
      </div>
    </div>
  ) : (
    <Loader/>
  );
};

export default Home;
