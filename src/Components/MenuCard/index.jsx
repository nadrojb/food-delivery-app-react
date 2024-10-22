function MenuCard ({foodName, foodItem, calories, price}){

    return(
        <div>
            <p>{foodName}</p>
            <p>{foodItem}</p>
            <p>{price}</p>
            <p>{calories}</p>
        </div>
    )


}