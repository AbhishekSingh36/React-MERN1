import React,{useState} from "react";

const CounterHooks = ({diff}) => {
    const [count,setCount] = useState(0)

    const increment = () => {
        
    }
    

    return (
        <div>
            <h1 className="counter-display">{count}</h1>
            <button className={inrement}>+</button>
            <button className={decrement}>-</button>
        </div>
    )
}