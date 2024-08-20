import React ,{useEffect, useState}from 'react'
import Test from './Test'

const Linux = () => {
    const[count,setCount]=useState(parseInt(localStorage.getItem('count'))||0)
    useEffect(()=>{
       localStorage.setItem('count',count.toString())
        },[count])
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>inc</button><br />
       <button onMouseEnter={()=>setCount(count-1)}>dnc</button>
       <p>{count}</p>
       <Test data={count}/>
    </div>
  )
}
export default Linux
