import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_VIDEO_DETAIL_API } from "../utils/constants";
import { fetchChannelDetails } from "../utils/channelSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetails, setVideoDetails] = useState(null);

  const dispatch = useDispatch();
  const channelLogo = useSelector(
    (state) => state.channel.channels[videoDetails?.snippet?.channelId]
  );

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    }
    return viewCount.toString();
  };

  useEffect(() => {
    dispatch(closeSidebar());

    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_DETAIL_API + videoId);
        if (!response.ok) {
          throw new Error(
            `Error fetching video details: ${response.statusText}`
          );
        }
        const data = await response.json();
        if (data.items.length === 0) {
          throw new Error("No video details found");
        }
        const videoData = data.items[0];
        setVideoDetails(videoData);

        dispatch(fetchChannelDetails(videoData.snippet.channelId));
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    if (videoId) {
      fetchVideoDetails();
    }
  }, [dispatch, videoId]);

  if (!videoDetails) return <div>Loading...</div>;

  const { snippet, statistics } = videoDetails;
  const { title, channelTitle } = snippet;

  const truncateTitle = (title, length = 63) => {
    return title.length > length ? title.substring(0, length) + "..." : title;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="ml-28 pt-[26px] flex">
        <div>
          <iframe
            className="rounded-lg"
            width="700"
            height="388"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="mt-3">
            <h1 className="font-bold text-xl">{truncateTitle(title)}</h1>
            <h2 className="text-gray-500 mb-3">{formatViewCount(statistics.viewCount)} views</h2>
            <div className="flex items-center">
              {channelLogo && (
                <img
                  src={channelLogo}
                  alt={`${channelTitle} logo`}
                  className="w-10 h-10 rounded-full mr-2"
                />
              )}
              <span className="font-semibold">{channelTitle}</span>
            </div>
          </div>
        </div>
      </div>
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
