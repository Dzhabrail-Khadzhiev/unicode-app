import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import ReadMore from "./ReadMore";

function CategoryId() {
  const { id } = useParams();
  const { loading, categoryId } = useSelector((state) => state);
  const dispatch = useDispatch();

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
    <div className="category">
      <div className="category-content">
        {categoryId.map((item) => (
          <div className="category-cards">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <ReadMore len='250' >{item.text}</ReadMore>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryId;
