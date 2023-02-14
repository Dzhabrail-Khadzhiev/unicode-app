import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="first-block-header">
          <p>THE</p>
        </div>
        <div className="second-block-header">
          <Link to="/">
            <p>Unicode</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
