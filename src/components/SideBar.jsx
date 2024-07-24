import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar, resetThumbnailSize } from "../utils/appSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  const handleHomeClick = () => {
    dispatch(closeSidebar());
    dispatch(resetThumbnailSize());
  };

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed pt-[68px] h-full top-0 left-0 p-5 w-[17rem] bg-white shadow-md overflow-y-auto">
      <ul className="border-b border-gray-300 mb-3">
        <li className="flex h-10 mb-1.5 hover:bg-[#f2f2f2] rounded-lg">
          <Link
            to="/"
            className="flex items-center px-4 py-2"
            onClick={handleHomeClick}
          >
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375917/youtube/hqowzljngmvofn4worge.svg"
              className="mr-6 h-6 w-6"
              alt="Home Icon"
            />
            Home
          </Link>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375919/youtube/ddci5sg56ynhknijdtdo.svg"
              className="mr-6 h-6 w-6"
              alt="Shorts Icon"
            />
            Shorts
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375920/youtube/cbtoebisrfhjdupebptn.svg"
              className="mr-6 h-6 w-6"
              alt="Subscriptions Icon"
            />
            Subscriptions
          </div>
        </li>
      </ul>
      <ul className="border-b border-gray-300 mb-3">
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <span className="mr-auto font-semibold text-lg">You</span>
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375915/youtube/iislh7p050tgqxjg2k0b.svg"
              alt="Arrow Icon"
              className="h-4 w-4 mr-48 mt-1"
            />
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375915/youtube/ilh5ga8oyulq62ujsuou.svg"
              className="mr-6"
              alt="Your Channel Icon"
            />
            Your Channel
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375917/youtube/mki5kkntassapigcmsma.svg"
              className="mr-6"
              alt="History Icon"
            />
            History
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375918/youtube/jgmlfr3tzk9e6zbuotik.svg"
              className="mr-6"
              alt="Playlist Icon"
            />
            Playlist
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375916/youtube/a2xprkpdojqrbxedyecf.svg"
              className="mr-6"
              alt="Your Videos Icon"
            />
            Your Videos
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375920/youtube/ddakavdrctd3n9sacig9.svg"
              className="mr-6"
              alt="Watch Later Icon"
            />
            Watch Later
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375917/youtube/koha3c7wpzlk7dtzx1ca.svg"
              className="mr-6"
              alt="Liked Videos Icon"
            />
            Liked Videos
          </div>
        </li>
      </ul>
      <ul className="border-b border-gray-300 mb-3">
        <li className="m-3 font-semibold text-lg">Explore</li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721727071/koha3c7wpzlk7dtzx1ce_ui6m7m.svg"
              alt="Trending Icon"
              className="mr-6"
            />
            Trending
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375917/youtube/ri4ka93hcoqq2ljftqmw.svg"
              alt="Live Icon"
              className="mr-6"
            />
            Live
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375916/youtube/a2xprkpdojqrbxedyecf.svg"
              className="mr-6"
              alt="Films Icon"
            />
            Films
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721727071/ri4ka93hcoqq2ljftqyu_l5tpzl.svg"
              className="mr-6"
              alt="Sport Icon"
            />
            Sport
          </div>
        </li>
      </ul>
      <ul>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375919/youtube/pubmtb6rqgmafdp6wvtv.svg"
              className="mr-6"
              alt="Setting Icon"
            />
            Setting
          </div>
        </li>
        <li className="flex h-10 mb-1.5 cursor-pointer hover:bg-[#f2f2f2] rounded-lg">
          <div className="flex items-center w-full px-4 py-2">
            <img
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375916/youtube/elur7ntgghw44rhx13kf.svg"
              className="mr-6"
              alt="Help Icon"
            />
            Help
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
