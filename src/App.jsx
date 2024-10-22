import { useEffect, useState } from "react";
import RestaurantButton from "./Components/RestaurantButton/index.jsx";
import Hero from "./Components/Hero/index.jsx";
import MenuCard from "./Components/MenuCard/index.jsx";

function App() {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState("home");

  function checkID(e) {
    let id = e.target.id
    setPage(id)
  }

  useEffect(() => {
    let pageName = page

    if (pageName == 'home') {

      fetch("https://food-delivery-api.dev.io-academy.uk/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });

    } else {

      fetch(`https://food-delivery-api.dev.io-academy.uk/restaurants/${page}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });

    }
    console.log(`this is ${page}`)
  }, [page])

  function printThings() {
    let pageName = page
    console.log(info)
    if(pageName == 'home') {

      info.map((restaurant) => {
        return (
          <RestaurantButton
            restaurantName={restaurant.name}
            id={restaurant.id}
            key={restaurant.id}
            onclick={checkID}
          ></RestaurantButton>
        );
      });

    } else {
      info.map((foodItem, index) => {
        return (
          <MenuCard
            foodName={foodItem.foodName}
            foodType={foodItem.foodType}
            calories={foodItem.calories}
            price={foodItem.price}
            key={index}
          ></MenuCard>
        );
      });
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
        <RestaurantButton clickHandler={checkID} restaurantName={'restaurant'} id={1}/>
        <RestaurantButton clickHandler={checkID} restaurantName={'home'} id={'home'}/>

        {
          printThings()
        }

      </section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2024</p>
      </footer>
    </>
  );
}

export default App;
