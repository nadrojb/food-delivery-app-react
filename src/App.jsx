import { useEffect, useState } from "react";
import RestaurantButton from "./Components/RestaurantButton/index.jsx";
import Hero from "./Components/Hero/index.jsx";

function App() {

  useEffect(() => {
    
    fetch("https://food-delivery-api.dev.io-academy.uk/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurantNames(data);
      });
  }, []);

  function onRestaurantClick(clicked_id) {
    useEffect(() => {
      fetch(
        `https://food-delivery-api.dev.io-academy.uk/restaurants/${clicked_id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setFoodItems(data);
        });
    }, []);
  }

  const [info, setInfo] = useState([]);
  const [page, setPage] = useState('home');
  
  
  function handleChange() {

  }

  useEffect(() => {
    if(page == 'home'){
      
      info.map((name, index) => {
        return (
          <RestaurantButton
            restaurantName={info.name} 
            id={info.id}
            key={info.id}
          ></RestaurantButton>
        );
      })
    
    
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
    })
  }
})


  

  onRestaurantClick(1);

  return (
    <>
      <header className="p-4 text-center shadow-lg md:text-left">
        <p>
          <span className="text-cyan-500">Food</span>Delivery
        </p>
      </header>
      <Hero />
      <section className="mt-4 w-full px-4 grid items-center justify-items-center grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        
      </section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2024</p>
      </footer>
    </>
  );
}

export default App;
