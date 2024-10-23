function ItemInfo({ itemName, itemValue }) {
  let backgroundColour;
  let textColour;
  let textContent;

if (itemName == "calories"){
    backgroundColour = "bg-cyan-500";
    textColour = "text-white";
    textContent = `Calories: ${itemValue}`;
} else if (itemName == "foodType"){
    backgroundColour = "bg-blue-500";
    textColour = "text-white";
    textContent = `Type: ${itemValue}`;
} else if (itemName == "sideItem"){
    backgroundColour = "bg-yellow-400";
    textColour = "text-black";
    textContent = "Side";
}

  return (
    <div className={`${backgroundColour} rounded px-2 text-xs`}>
      <p className={`${textColour} text-xs font-semibold`}>
        {textContent}
      </p>
    </div>
  );
}

export default ItemInfo;
