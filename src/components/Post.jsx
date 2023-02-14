import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/reducer";
import { Circles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

function Post() {
  const { loading, posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

 
  return (
    <div className="main">
      <div className="main-content">
        {posts.map((item) => (
          <div onClick={() => item.id} className="post-content">
             <Link to={`/post/${item._id}`}>
            <img src={item.image} alt="" />
            </Link>
            <h3>{item.title}</h3>

            
           <ReadMore len='250' >{item.text}</ReadMore>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
