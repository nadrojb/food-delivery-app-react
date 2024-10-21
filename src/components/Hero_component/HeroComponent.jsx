function HeroComponent(RestaurantName) {
  if (RestaurantName == "") {
    return (
      <>
        <h1 className="">Food.Delivered</h1>
        <p>Order you favourite food from local restaurants, right to your door.</p>
      </>
    );
  } else {
    return(
        <>
        <h1 className="">{RestaurantName}</h1>
    
      </>
    )
  }
}
