import axios from 'axios'
import React ,{useState,useEffect}from 'react'

function DataFetchingSingle() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButton,setIdFromButton]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res=>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[idFromButton])
    let buttonClicked=()=>{
        setIdFromButton(id)
    }
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={buttonClicked}>Fetch details</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchingSingle