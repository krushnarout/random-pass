import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isThumbnailLarge = useSelector((state) => state.app.isThumbnailLarge);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className={`flex flex-wrap ${isThumbnailLarge ? "pl-[3rem]" : "pl-72"}`}>
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
