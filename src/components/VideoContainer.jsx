import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API, YOUTUBE_LIVE_STREAMS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isThumbnailLarge = useSelector((state) => state.app.isThumbnailLarge);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const popularVideosResponse = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
      const liveStreamsResponse = await fetch(YOUTUBE_LIVE_STREAMS_API);

      const popularVideosData = await popularVideosResponse.json();
      const liveStreamsData = await liveStreamsResponse.json();

      const processedPopularVideos = popularVideosData.items.map((item) => ({
        id: item.id,
        snippet: item.snippet,
        statistics: item.statistics,
        isLive: false,
      }));

      const processedLiveStreams = liveStreamsData.items.map((item) => ({
        id: item.id.videoId,
        snippet: item.snippet,
        statistics: {},
        isLive: true,
      }));

      const combinedVideos = [
        ...processedLiveStreams,
        ...processedPopularVideos,
      ];

      setVideos(combinedVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className={`flex flex-wrap ${isThumbnailLarge ? 'pl-[3rem]' : 'pl-72'}`}>
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} isThumbnailLarge={isThumbnailLarge} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
