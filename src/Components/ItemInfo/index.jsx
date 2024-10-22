function ItemInfo({ itemName, itemValue }) {
  let item = "sideItem";

  function changeTextColour() {
    if (item == "sideItem") {
      return "text-black";
    } else {
      return "text-white";
    }
  }

  function changeBackgroundColour() {
    if (item == "calories") {
      return "bg-cyan-500";
    } else if (item == "foodType") {
      return "bg-blue-500";
    } else if (item == "sideItem") {
      return "bg-yellow-400";
    }
  }

  return (
    <div className={`${changeBackgroundColour()} py-0.5 px-1.5 rounded-md`}>
      <p className={`${changeTextColour()}  text-xs font-semibold `}>
        {itemName}:{itemValue}
      </p>
    </div>
  );
}

export default ItemInfo;
