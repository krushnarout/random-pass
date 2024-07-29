import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelDetails } from "../utils/channelSlice";

const formatViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "K";
  }
};

const truncateTitle = (title, length = 55) => {
  return title.length > length ? title.substring(0, length) + "..." : title;
};

const VideoCard = ({ info }) => {
  const dispatch = useDispatch();
  const channelLogo = useSelector(
    (state) => state.channel.channels[info.snippet.channelId]
  );
  const isThumbnailLarge = useSelector((state) => state.app.isThumbnailLarge);

  useEffect(() => {
    if (!channelLogo) {
      dispatch(fetchChannelDetails(info.snippet.channelId));
    }
  }, [dispatch, info.snippet.channelId, channelLogo]);

  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics, isLive } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className={`w-[22rem] pt-3 p-2 ${
        isThumbnailLarge ? "w-[26rem] h-[380px]" : "w-[22rem] h-[330px]"
      }`}
    >
      <img
        className={`rounded-lg object-cover ${
          isThumbnailLarge ? "w-[26rem] h-56" : "w-[22rem] h-48"
        }`}
        src={`${
          isThumbnailLarge ? thumbnails.high.url : thumbnails.medium.url
        }`}
        alt="Video"
      />
      <div className="flex items-center mt-2 mr-1">
        {channelLogo && (
          <img
            src={channelLogo}
            alt={`${channelTitle} logo`}
            className={`rounded-full mx-2 mb-8 ${
              isThumbnailLarge ? "w-12 h-12" : "w-10 h-10"
            }`}
          />
        )}
        <div>
          <ul>
            <li
              className={`font-semibold ${
                isThumbnailLarge ? "text-lg" : "text-base"
              }`}
            >
              {truncateTitle(title)}
            </li>
            <li
              className={`text-gray-500 ${
                isThumbnailLarge ? "text-base" : "text-sm"
              }`}
            >
              {channelTitle}
            </li>
            {!isLive && (
              <li
                className={`text-gray-500 ${
                  isThumbnailLarge ? "text-base" : "text-sm"
                }`}
              >
                {formatViewCount(statistics.viewCount)} views
              </li>
            )}
            {isLive && (
              <li
                className={`text-white bg-red-600 flex px-1 ${
                  isThumbnailLarge ? "text-base w-16 mt-1" : "text-sm w-14 mt-1"
                }`}
              >
                <img
                  src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375917/youtube/ri4ka93hcoqq2ljftqmw.svg"
                  className="w-4 mr-1"
                  alt="Live Icon"
                />
                LIVE
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
