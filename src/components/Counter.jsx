import {useState} from "react";

function Counter(){
    const[count,setCount] = useState(0)

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button className="buttonCounter" onClick={()=> setCount(count-1)}>-</button>
            <button className="buttonCounter" onClick={()=> setCount(0)}>Reset</button>
            <button className="buttonCounter" onClick={()=> setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;