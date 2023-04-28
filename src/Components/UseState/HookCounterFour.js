import React ,{useState}from 'react'

function HookCounterFour() {
    const [items,setItems]=useState([])
    let addItems=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }
    ])   
    }
  return (
    <div>
        <button onClick={addItems}>Add items</button>
        <ul>
            {items.map(item=>(
                <li key={items.id}>{item.value}

                </li>
            ))}
        </ul>
    </div>
  )
}

export default HookCounterFour