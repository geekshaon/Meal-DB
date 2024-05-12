import React, { useEffect, useState } from "react";
import "./Home.css";
import Meal from "../meal/Meal";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  // console.log(meals.meals);
  console.log(sidebar);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleAddBtn = ({ strMeal }) => {
    const exits = sidebar.find((pd) => pd === strMeal);
    if (exits) {
      window.alert("All Ready Added");
    } else {
      setSidebar([...sidebar, strMeal]);
    }
  };
  return (
    <div className="home">
      <div className="meal-container">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} handleAddBtn={handleAddBtn}></Meal>
        ))}
      </div>
      <div className="left-info">
        <h2>Sidebar</h2>

        {sidebar.map((pd) => (
          <Sidebar key={pd} item={pd}></Sidebar>
        ))}
      </div>
    </div>
  );
};

export default Home;
