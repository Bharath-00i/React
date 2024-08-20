import React, { useState,useEffect } from 'react'
const Butttn = () => {
    const[li,dis]=useState(0);
    const[bb,cc]=useState("black");
    const [wcolor, setColor] = useState("black"); 
  useEffect(() => {
    document.getElementById("App").style.backgroundColor = wcolor;
  }, [wcolor]);
  function bclour(){
    setColor("white")
   
  }
  function wcolour(){
    setColor("black")
  }
    function colr(){
        cc("red");
    }
    function colw(){
        cc("black")
    }

    function inc(){
        dis(li+1)
    }
    function incc(){
        if (li>0){
        dis(li-1)
    }
    }
    function like(){
        colr()
        inc()
    }
    function disk(){
         incc()
         colw()
    }
  return (
    <div>
      <div style={{display:"flex",columnGap:"10px"}}> 
         <button 
         style={{backgroundColor:"black",
            color:"white",
            height:"20px",
            width:"80px",
            backgroundColor:bb,
            borderStyle:"solid",
            borderColor:"white"}} onClick={like}>LiKe:{li}</button> 
          <button style={{backgroundColor:"black",color:"white",height:"20px",width:"80px"
          ,borderStyle:"solid",borderColor:"white"}} onClick={disk}>DiSlIkE</button><br />
          <button onClick={bclour} onDoubleClick={wcolour}  style={{backgroundColor:"black",color:"white",height:"20px",width:"60px"
          ,borderStyle:"solid",borderColor:"white"}}>ShArE</button></div><br />
    </div>
  )
}

export default Butttn
