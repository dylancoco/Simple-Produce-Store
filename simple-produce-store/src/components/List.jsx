export default function List({ list, setList }){
    function handleOnClick(index){
        const temp = [...list]
        temp[index].count++;
        setList(temp)
    }
    return (
        <>
            <h1>Simple Produce Store</h1>
            {list.map((item, index) => (
                <div key={index}>{`${item.name} $${item.price.toFixed(2)}`}
                <button onClick={() => handleOnClick(index)}>+</button>
                </div>
            ))}
        </>
    )
}