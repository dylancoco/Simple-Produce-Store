export default function Cart({ list, setList }){
    function handleOnClick(index){
        const temp = [...list]
        temp[index].count--;
        setList(temp)
    }
    function calcuateSum(){
        let sum = 0
        list.map((item) => (
            sum += item.price * item.count
        ))
        return <div>Total: ${sum.toFixed(2)}</div>
    }
    return (
        <>
            <h1>Shopping Cart: </h1>
            {list.map((item, index) => (
                item.count !== 0 ? <div key={index}>{`${item.name} $${item.price} x ${item.count} = ${item.count * item.price}`}
                <button onClick={() => handleOnClick(index)}>-</button> </div> : null
            ))}
            {calcuateSum()}
        </>
    )
}