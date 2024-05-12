import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="Header">
        <div className="logo">MealDB</div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
