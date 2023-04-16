import React,{useState} from "react";

const CounterHooks = ({diff}) => {

    return (
        <div>
            <h1 className="counter-display">{count}</h1>
            <button className={inrement}>+</button>
            <button className={decrement}>-</button>
        </div>
    )
}