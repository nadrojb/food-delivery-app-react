

function MenuItems(){

    return(

        <div id="border" className="border border-solid border-black w-full mx-auto p-4 shadow-xl rounded h-32 ">
            <h3 id="itemName" className="font-bold text-lg">Chicken Sandwich</h3>
            <div id="itemInfo" className="flex">
                <span className="bg-cyan-500 rounded px-2 text-xs text-white h-4 mr-1">Calories: 560</span>
                <span className="bg-blue-500 rounded px-2 text-xs text-white h-4">Type: Sandwich</span>
            </div>
            <div id="priceInfo" className="flex border border-solid border-black my-5 h-8">
                <div className="font-bold">£4.99</div>
                <div>
                    <button className="border border-solid border-black w-5">-</button>
                    <span>2</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    
    )
}

export default MenuItems