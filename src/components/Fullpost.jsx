import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Fullpost = () => {
  const { id } = useParams();
  const { loading, posts } = useSelector((state) => state);
  const post = posts.find((item) => item._id === id);
  console.log(post);
  return (
    <div className="full-post">
      <div className="full-post-block">
        <img src={post.image} alt="" />
        <h3> {post.title}</h3>
        <p> {post.text}</p>
      </div>
    </div>
  );
};

export default Fullpost;
