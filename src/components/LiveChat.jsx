import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { YOUTUBE_LIVE_CHAT_API } from "../utils/constants";
import { v4 as uuidv4 } from 'uuid';

const LiveChat = ({ liveChatId }) => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [pollingInterval, setPollingInterval] = useState(2000);

  const fetchLiveChatMessages = async () => {
    try {
      let url = YOUTUBE_LIVE_CHAT_API + liveChatId;
      if (nextPageToken) {
        url += `&pageToken=${nextPageToken}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        data.items.forEach((item) => {
          dispatch(
            addMessage({
              name: item.authorDetails.displayName,
              message: item.snippet.displayMessage,
              profileImageUrl: item.authorDetails.profileImageUrl,
            })
          );
        });
        setNextPageToken(data.nextPageToken);
        setPollingInterval(data.pollingIntervalMillis || 2000);
      }
    } catch (error) {
      console.error("Error fetching live chat messages:", error);
    }
  };

  useEffect(() => {
    if (liveChatId) {
      const interval = setInterval(fetchLiveChatMessages, pollingInterval);
      return () => clearInterval(interval);
    }
  }, [liveChatId, nextPageToken, pollingInterval]);

  return (
    <div className="ml-5 border border-gray-300 h-[600px] w-3/4 rounded-lg overflow-x-hidden  overflow-y-scroll flex flex-col-reverse">
      <div>
        {chatMessages.map((c) => (
          <LiveChatMessage key={uuidv4()} name={c.name} message={c.message} profileImageUrl={c.profileImageUrl} />
        ))}
        <form
          className="w-full p-4 flex border-t border-gray-300"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Krushna",
                message: liveMessage,
                profileImageUrl: "path/to/default/image.jpg",
              })
            );
            setLiveMessage("");
          }}
        >
          <img src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721727245/rm4ka93hcoqq2ljftqe_lpky5g.png" alt="Profile Icon" className="h-7 w-7 mt-1 mr-4" />
          <input
            type="text"
            placeholder="Chat..."
            className="w-72 h-9 bg-[#f2f2f2] px-2 rounded-3xl"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button type="submit" className="w-6 h-6 ml-4 mt-1">
            <img src="https://res.cloudinary.com/krushna-projects-assets/image/upload/v1721375919/youtube/axljpfzqpqbrpwh4ibeb.svg" alt="Send Icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
