import React from 'react';

const LiveChatMessage = ({ name, message, profileImageUrl }) => {
  return (
    <div className="flex items-start p-[5px] pl-6">
      <img src={profileImageUrl} alt={`${name}'s profile`} className="w-6 h-6 rounded-full mr-2" />
      <div>
        <div className="flex-row-reverse items-baseline">
          <span className="font-semibold">{name}</span>
          <span className="text-sm ml-2">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveChatMessage;
