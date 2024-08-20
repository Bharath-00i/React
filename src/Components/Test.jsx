// import React ,{useEffect, useState}from 'react'
// const Test = () => {
//     const[inpp,setinpp]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setinpp(inpp+1);
//         },1000)
//     })
//   return (
//     <div>
//        <p>
//         {inpp}
//        </p>
//     </div>
//   )
// }
// export default Test

// import React, {useState,useEffect } from 'react'
// const Test = () => {
//     const[inpp,setinpp]=useState(0);
//         useEffect(()=>{
//             setTimeout(()=>{
//                 setinpp(inpp+1);
//             },1000)
//         })
// const[i,j]=useState(0);
// function inc () {
//     j(i+1);
// } 
// function dec(){
//     j(i-1)}
//   return (
//     <div>
//          <p>Current Count: {i}</p>
//             <button onClick={inc}>Increment</button><br /><br />
//             <button onClick={dec}>Decrement</button>
//             <p>
// //         {inpp}
// //        </p>
//     </div>
   
//   )
// }

// export default Test

import React from 'react'

const Test = ({data}) => {
  return (
    <div>
   
      <img src="insta1.webp" alt="//" style={{height:"450px",width:"450px"}}/><br/><br />
      {data}
    </div>
  )
}

export default Test
