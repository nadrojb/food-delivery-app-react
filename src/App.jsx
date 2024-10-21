import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [restaurantNames, setRestaurantNames] = useState([]);

  useEffect(() => {
    fetch("https://food-delivery-api.dev.io-academy.uk/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurantNames(data);
      });
  }, []);

  return (
    <>
      {restaurantNames.map((restaurantName) => {
        return <button key={restaurantName.id}>{restaurantName.name}</button>;
      })}
    </>
  );
}

export default App;
