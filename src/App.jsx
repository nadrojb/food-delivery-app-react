import { useEffect, useState } from "react";
import RestaurantButton from "./Components/RestaurantButton/index.jsx";
import HeroText from "./Components/HeroText/index.jsx";

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
      <header className="p-4 text-center shadow-lg md:text-left">
        <p>
          <span className="text-cyan-500">Food</span>Delivery
        </p>
      </header>
      <section className="w-full mt-4 md:px-4 h-60">
        <div className="bg-[url(/burgers.jpg)] w-full h-full bg-cover bg-center content-center">
          <HeroText />
        </div>
      </section>
      <section className="mt-4 w-full px-4 grid items-center justify-items-center grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurantNames.map((restaurantName) => {
          return (
            <RestaurantButton
              restaurantName={restaurantName.name}
              key={restaurantName.id}
            ></RestaurantButton>
          );
        })}
      </section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2024</p>
      </footer>
    </>
  );
}

export default App;
