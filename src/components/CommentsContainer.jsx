import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";

const Comment = ({
  authorDisplayName,
  textOriginal,
  authorProfileImageUrl,
}) => (
  <div className="flex">
    <img
      src={authorProfileImageUrl}
      alt="Author profile"
      className="h-10 w-10 mt-3 rounded-full"
    />
    <div className="p-2">
      <p>{authorDisplayName}</p>
      <p>{textOriginal}</p>
    </div>
  </div>
);

const CommentList = ({ comments }) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return <p>No comments available.</p>;
  }

  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment
        authorDisplayName={
          comment.snippet.topLevelComment.snippet.authorDisplayName
        }
        textOriginal={comment.snippet.topLevelComment.snippet.textOriginal}
        authorProfileImageUrl={
          comment.snippet.topLevelComment.snippet.authorProfileImageUrl
        }
      />
      {comment.replies && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies.comments} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(YOUTUBE_COMMENTS_API + videoId);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setComments(data.items);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  return (
    <div className="ml-24 p-5">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
