

function MenuItems(){

    return(

        <div id="border" className="border border-solid border-black w-full mx-auto p-5 shadow-xl rounded h-40">
            <h3 id="itemName" className="font-bold text-lg">Chicken Sandwich</h3>
            <div id="itemInfo" className="flex flex-wrap pt-2 gap-1">
                <span className="bg-cyan-500 rounded px-2 text-xs text-white h-4">Calories: 560</span>
                <span className="bg-blue-500 rounded px-2 text-xs text-white h-4">Type: Sandwich</span>
            </div>
            <div id="priceInfo" className="flex justify-between items-center my-4 xl:my-6">
                <div className="font-bold ">£4.99</div>
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