import React,{useState} from "react";

const CounterHooks = ({diff}) => {
    const [count,setCount] = useState(6)

    const increment = () => {
        setCount(count + diff)
    }
    const decrement = () => {
        setCount(count - diff)
    }
    

    return (
        <div>
            <h1 className="counter-display">{count}</h1>
            <button className={increment}>+45{diff}</button>
            <button className={decrement}>-45{diff}</button>
        </div>
    )
}

export default CounterHooks;