// import React, { useState } from 'react'
// const SfNav = () => {
//   let [stt,setStt]=useState(0);
// const restStt=()=>{
//     stt = 0; 
//   };
  
//   return (
//     <div style={{color:"white"}}>
//       <button onClick={()=>setStt(stt+1)} onDoubleClick={()=>{restStt()}}>cccc</button>
//       <p>{stt}</p>

//     </div>
//   )
// }
// export default SfNav

  import React,{useState}from 'react'
  
  const SfNav = () => {
    const[data,setData]=useState('')
    return (
      <div>
        <input style={{
          height:"20px",          
          width:"40px",
          borderStyle:"solid",
          borderColor:"red"}}
           type="text"
            onChange={(s)=>setData(s.target.value)} />
        <p style={{color:"red"}}>{data}</p>
      </div>
    )
  }
  export default SfNav


  
