import React ,{useState}from 'react'
import useDocumentTitle from './HOOKS/useCounter'

function DocTitleTwo() {
    const [count,setCount]=useState(0)
useDocumentTitle(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default DocTitleTwo