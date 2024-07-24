import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const fullList = [
  "All",
  "Music",
  "Coding",
  "Live",
  "Action",
  "Documentary",
  "Songs",
  "Trailers",
  "Horror",
  "News",
  "Shows",
  "Sports",
  "Gaming",
];

const ButtonList = () => {
  const isThumbnailLarge = useSelector((state) => state.app.isThumbnailLarge);

  const filteredList = isThumbnailLarge
    ? fullList
    : fullList.filter((item) => item !== "Sports" && item !== "Gaming");

  return (
    <div className={`flex ${isThumbnailLarge ? "pl-12" : "pl-72"}`}>
      {filteredList.map((item) => (
        <Button key={uuidv4()} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
