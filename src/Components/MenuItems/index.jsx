import ItemInfo from "../ItemInfo"


function MenuItems({key, foodName, foodType, calories, price}){


    return(

        <div id="border" className="border border-solid border-black w-full p-5 shadow-xl rounded h-40">
            <h3 id="itemName" className="font-bold text-lg">{foodName}</h3>
            <div id="itemInfo" className="flex flex-wrap pt-2 gap-1">
                <ItemInfo itemName="sideItem" itemValue="560"/>
            </div>
            <div id="priceInfo" className="flex justify-between items-center my-4 xl:my-6">
                <div className="font-bold ">£{price}</div>
                <div className="">
                    <button className="bg-blue-500 text-white h-8 w-7 rounded">-</button>
                    <span className='font-extrabold text-xs p-2'>2</span>
                    <button className='bg-blue-500 text-white h-8 w-7 rounded'>+</button>
                </div>
            </div>
        </div>
    
    )
}

export default MenuItems