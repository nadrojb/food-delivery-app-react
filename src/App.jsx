import { useEffect, useState } from "react";
import RestaurantButton from "./Components/RestaurantButton/index.jsx";
import Hero from "./Components/Hero/index.jsx";
import MenuCard from "./Components/MenuCard/index.jsx";

function App() {
  const [info, setInfo] = useState([]);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    if (currentId === "home") {
      fetch("https://food-delivery-api.dev.io-academy.uk/restaurants")
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
        });
    } else {
      fetch(
        `https://food-delivery-api.dev.io-academy.uk/restaurants/${currentId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setInfo(data.foodItems);
        });
    }
  }, [currentId]);

  function renderContent() {
    if (currentId === "home") {
      return info.map((restaurant) => (
        <RestaurantButton
          key={restaurant.id}
          restaurantName={restaurant.name}
          id={restaurant.id}
          clickHandler={setCurrentId}
        />
      ));
    } else {
      return info.map((foodItem, index) => (
        <MenuCard
          key={index}
          foodName={foodItem.foodName}
          foodType={foodItem.foodType}
          calories={foodItem.calories}
          price={foodItem.price}
        />
      ));
    }
  }

  return (
    <>
      <header className="p-4 text-center shadow-lg md:text-left">
        <p>
          <span className="text-cyan-500">Food</span>Delivery
        </p>
      </header>
      <Hero />
      <section className="mt-4 w-full px-4 grid items-center justify-items-center grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderContent()}
      </section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2024</p>
      </footer>
    </>
  );
}

export default App;
