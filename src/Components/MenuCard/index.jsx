function MenuCard({ foodName, foodType, calories, price }) {
  return (
    <div>
      <p>{foodName}</p>
      <p>{foodType}</p>
      <p>{price}</p>
      <p>{calories}</p>
    </div>
  );
}

export default MenuCard;
