import React,{useState} from "react";

const CounterHooks = ({diff}) => {
    const [count,setCount] = useState(1)

    const increment = () => {
        setCount(count + diff)
    }
    const decrement = () => {
        setCount(count - diff)
    }
    

    return (
        <div>
            <h1 className="counter-display">{count}</h1>
            <button className={increment}>+25{diff}</button>
            <button className={decrement}>-25{diff}</button>
        </div>
    )
}

export default CounterHooks;