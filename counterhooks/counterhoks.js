import React,{useState} from "react";

const CounterHooks = ({diff}) => {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count + diff)
    }
    const decrement = () => {
        setCount(count - diff)
    }
    

    return (
        <div>
            <h1 className="counter-display">{count}</h1>
            <button className={increment}>+</button>
            <button className={decrement}>-</button>
        </div>
    )
}