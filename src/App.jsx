import { useEffect, useState } from "react";
import RestaurantButton from "./Components/RestaurantButton/index.jsx";
import Hero from "./Components/Hero/index.jsx";
import ItemInfo from "./Components/ItemInfo/index.jsx";
import MenuItems from "./Components/MenuItems/index.jsx";
import ReturnButton from "./Components/ReturnButton/index.jsx";

function App() {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    if (!currentId) {
      fetch("https://food-delivery-api.dev.io-academy.uk/restaurants")
        .then((response) => response.json())
        .then((data) => {
          setRestaurantInfo(data);
        });
    } else {
      fetch(
        `https://food-delivery-api.dev.io-academy.uk/restaurants/${currentId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setRestaurantInfo(data.foodItems);
          setCurrentName(data.restaurant);
        });
    }
  }, [currentId]);


  function renderContent() {
    if (!currentId) {
      return restaurantInfo.map((restaurant) => (
        <RestaurantButton
        key={restaurant.id}
        restaurantName={restaurant.name}
        id={restaurant.id}
        clickHandler={setCurrentId}
        />
      ));
    } else {
      return restaurantInfo.map((foodItem, index) => (
        <MenuItems
        key={index}
        foodName={foodItem.foodName}
        foodType={foodItem.foodType}
        calories={foodItem.calories}
        side={foodItem.sideItem}
        price={foodItem.price}
        />
      ));
    }
  }
  
  function renderReturnButton() {
    return currentId ? (
      <ReturnButton returnClickHandler={setCurrentId} />
    ) : null;
  }
  function renderRestaurantName() {
    if (!currentId) {
      return <Hero currentId={currentId} heroText={"Food. Delivered."} />;
    } else {
      return <Hero currentId={currentId} heroText={currentName} />;
    }
  }
  
  let xlMediaCol;
  if (!currentId){
  xlMediaCol = '';
  } else {
  xlMediaCol = "xl:grid-cols-6";
  }

  return (
    <>
      <header className="p-4 text-center shadow-lg md:flex md:justify-between">
        <p>
          <span className="text-cyan-500">Food</span>Delivery <br />
        </p>
        {renderReturnButton()}
      </header>

      {renderRestaurantName()}
      <section className={`mt-4 w-full px-4 grid items-start grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${xlMediaCol} gap-8`}>
        {renderContent()}
      </section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2024</p>
      </footer>
    </>
  );
}

export default App;
