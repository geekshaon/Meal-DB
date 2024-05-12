import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h3>{props.item}</h3>
    </div>
  );
};

export default Sidebar;
