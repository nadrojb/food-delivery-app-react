import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BtnComponent from "./Components/BtnComponent";
import HeroComponent from "./components/Hero_component/HeroComponent";

function App() {
  return (
    <>
      <header className="p-4 text-center shadow-lg md:text-left">
        <p>
          <span className="text-cyan-500">Food</span>Delivery
        </p>
      </header>
      <section className="w-full mt-4 md:px-4 h-60">
        <div className="bg-[url(/public/burgers.jpg)] w-full h-full bg-cover bg-center content-center"><HeroComponent/></div>
      </section>
      <section className="mt-4 w-full px-4 grid items-center justify-items-center grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
        <BtnComponent restaurantName={"Mcdonalds"} />
      </section>
      <footer className="p-4 border-t-2 mt-4 mx-4">
        <p>© Copyright iO Academy 2022</p>
      </footer>
    </>
  );
}

export default App;
