import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [restaurants, setRestaurantNames] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/iO-Academy/food-delivery-api/refs/heads/main/public/food.json')
      .then((response) => response.json())
      .then((data) => {
        setRestaurantNames(data)// array of objects each containing 'restaurant' and 'foodItems'
      })
  }, [])

  return (
    <>
      {restaurants.map((restaurants, index) => {
        return (
          <button key={index}>{restaurants.foodItems[0].foodName}</button>
        )
      })
      }
    </>
  )
}

export default App
