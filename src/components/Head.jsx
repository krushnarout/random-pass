import React, { useEffect, useState } from "react";
import { toggleSidebar } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { v4 as uuidv4 } from 'uuid';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = () => {
    const script = document.createElement("script");
    script.src = `${YOUTUBE_SEARCH_API}${searchQuery}&callback=handleSearchSuggestions`;
    document.body.appendChild(script);

    script.onload = () => {
      document.body.removeChild(script);
    };

    script.onerror = () => {
      console.error("Error loading script");
      document.body.removeChild(script);
    };
  };

  window.handleSearchSuggestions = (data) => {
    const suggestions = data[1].map((item) => item[0]);
    setSearchSuggestions(suggestions);
  };

  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="fixed top-0 w-full bg-white z-50">
      <div className="grid grid-flow-col m-2 ">
        <div className="flex col-span-1 ml-4 mt-2">
          <img
            onClick={toggleSidebarHandler}
            className="h-6 cursor-pointer"
            src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375915/youtube/yut8wc774ivon1web8cm.svg"
            alt="Menu Icon"
          />
          <a href="/">
            <img
              className="h-[20px] mx-6"
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375918/youtube/fq6jcjizzvu74razy7lx.svg"
              alt="YouTube Logo"
            />
          </a>
        </div>
        <div className="col-span-10 ml-24 mobile:col-span-5">
          <div className="flex">
            <input
              className="ml-12 h-10 w-[34rem] border border-gray-300 p-2 rounded-l-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-300 py-2 pl-2 rounded-r-full w-[60px] h-10 bg-gray-50">
              <img
                src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375919/youtube/ytlihm8x7cj0vwuhgzob.svg"
                alt="Search Icon"
                className="mb-2 h-6 px-2"
              />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed ml-[50px] bg-white rounded-xl">
              <ul>
                {searchSuggestions.map((suggestion) => (
                  <li key={uuidv4()} className="flex py-2 px-5 w-[34rem]">
                    <img
                      src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375919/youtube/ytlihm8x7cj0vwuhgzob.svg"
                      className="h-6 w-5 mr-4"
                      alt="Search Icon"
                    />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <a href="https://github.com/krushnarout" target="_blank">
            <img
              className="h-9 ml-16"
              src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721727245/rm4ka93hcoqq2ljftqe_lpky5g.png"
              alt="Profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
