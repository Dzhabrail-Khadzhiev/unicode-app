import { fetchApi } from "./api";

const initialState = {
  loading: false,
  categories: [],
  posts: [],
  categoryId: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/categories":
      return { ...state, loading: true };

    case "fullfiled/categories":
      return { ...state, loading: false, categories: action.payload };

    case "load/posts":
      return { ...state, loading: true };

    case "fullfiled/posts":
      return { ...state, loading: false, posts: action.payload };

    case "load/categoryId":
      return { ...state, loading: true };

    case "fullfiled/categoryId":
      return { ...state, loading: false, categoryId: action.payload };

    default:
      return state;
  }
};

export const getCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "load/categories" });
    const response = await fetchApi("categories");
    const data = await response.json();
    dispatch({ type: "fullfiled/categories", payload: data });
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "load/posts" });
    const response = await fetchApi("posts");
    const data = await response.json();
    dispatch({ type: "fullfiled/posts", payload: data });
  };
};

export const getCategoriesId = (id) => {
  return async (dispatch) => {
    dispatch({ type: "load/categoryId" });
    const response = await fetchApi(`posts/category/${id}`);
    const data = await response.json();
    dispatch({ type: "fullfiled/categoryId", payload: data });
  };
};
