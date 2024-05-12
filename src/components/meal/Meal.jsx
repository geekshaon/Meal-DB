import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strCategory, strMealThumb } = props.meal;
  const handleAddBtn = props.handleAddBtn;
  //console.log(props.meal);
  return (
    <div className="singel-meal">
      <div className="meal-info">
        <img src={strMealThumb} alt="" />
        <h3>{strMeal}</h3>
        <p>Category: {strCategory}</p>
      </div>
      <button className="addTo" onClick={() => handleAddBtn({ strMeal })}>
        Add To SideBar
      </button>
    </div>
  );
};

export default Meal;
