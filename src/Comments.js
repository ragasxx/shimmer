import React from "react";

const data = [
  {
    username: "void",
    comment: "lorem ipsum dolor sit",
    replies: [
      {
        username: "pankaj",
        comment: "yellow color looks good",
        replies: [
          {
            username: "dheeraj",
            comment: "black is good",
            replies: [],
          },
        ],
      },
      {
        username: "deepak",
        comment: "very good",
        replies: [],
      },
    ],
  },
  {
    username: "elon musk",
    comment: "lorem ipsum dolor sit",
    replies: [
      {
        username: "Bill gates",
        comment: "yeahh very true",
        replies: [],
      },
    ],
  },
  {
    username: "sachin",
    comment: "lorem ipsum dolor sit",
    replies: [],
  },
];

const Comments = () => {
  return (
    <div>
      <CommentItem data={data} />
    </div>
  );
};

const CommentItem = ({ data }) => {
  return data.map((comment, index) => (
    <div className="pl-12 mb-4 border-l-2 border-black">
      <div className="flex">
        <div className="w-16 p-2">
          <img
            className="w-full rounded-full"
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
            alt="redditImage"
          />
        </div>
        <div className="p-2 ml-2">
          <p className="font-semibold font-serif">{comment.username}</p>
          <p className="font-sans">{comment.comment}</p>
        </div>
      </div>

      <div>
        <CommentItem data={comment.replies} />
      </div>
    </div>
  ));
};

export default Comments;
