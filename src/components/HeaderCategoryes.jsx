import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoriesId } from "../store/reducer";
import { Link } from "react-router-dom";

const HeaderCategoryes = () => {
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const newId = (id) => {
    dispatch(getCategoriesId(id));
  };

  return (
    <div className="header-categoryes">
      <div className="categoryes-btn">
        {categories.map((item) => {
          return (
            <Link to={`/post/category/${item._id}`}>
              <button onClick={() => newId(item._id)}>{item.title}</button>
            </Link>
          );
        })}
      </div>
      <div className="line-block"></div>
    </div>
  );
};

export default HeaderCategoryes;
