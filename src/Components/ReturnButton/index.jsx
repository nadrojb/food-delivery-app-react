
function ReturnButton({returnClickHandler}) {
    return (
        <button onClick={() => returnClickHandler(0)}
        className="text-blue-500 font-bold" > &lt;&lt;  Change Restaurant</button> 
    )
}

export default ReturnButton