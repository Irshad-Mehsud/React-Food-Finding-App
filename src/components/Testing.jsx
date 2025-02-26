import React, { useState, useEffect } from "react";

const Testing = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeal(data.meals ? data.meals[0] : null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>I am Testing</h1>
      {meal ? (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
          <p>{meal.strInstructions}</p>
        </div>
      ) : (
        <p>Loading meal data...</p>
      )}
    </div>
  );
};

export default Testing;
