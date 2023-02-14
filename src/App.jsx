import React from "react";
import Header from "./components/Header";
import HeaderCategoryes from "./components/HeaderCategoryes";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import CategoryId from "./components/CategoryId";
import Fullpost from "./components/Fullpost";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderCategoryes />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/category/:id" element={<CategoryId />} />
        <Route path="/post/:id" element={<Fullpost />} />
      </Routes>
    </div>
  );
}

export default App;
