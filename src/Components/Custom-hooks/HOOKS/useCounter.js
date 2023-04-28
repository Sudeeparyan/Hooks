import {useState} from 'react'

function useCounter(initialCount=0 ,value) {
    const[count,setCount]=useState(initialCount)
    let increment=()=>{
        setCount(prevState=>prevState+value)
    }
    let decrement=()=>{
        setCount(prevState=>prevState-value)
    }
    let reset=()=>{
        setCount(initialCount)
    }
    return [count,increment,decrement,reset]
}

export default useCounter