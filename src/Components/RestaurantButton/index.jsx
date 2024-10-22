function RestaurantButton({ restaurantName, id, clickHandler }) {
  return (
    <button onClick={clickHandler} id={id} className="bg-white py-5 border-cyan-500 border-2 rounded-md text-3xl font-medium w-full">
      {restaurantName}
    </button>
  );
}

export default RestaurantButton;
