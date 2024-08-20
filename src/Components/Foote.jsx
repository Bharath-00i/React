import React from 'react'

const Foote = (data) => {

  return (
    <div style={{height:"200px"}}>
      <h3 style={{color:"white"}}>Footer:</h3>
      <p>I declare that the information in this resume is true to the best of my knowledge and belief.</p>
      <p>Contact Info:9361867673</p>
      <p>Email:bharathkumar21cse@gmail.com</p>
      <p>GitHub:https://github.com/Bharath-00i </p>
      <p>Linked In:https://www.linkedin.com/in/bharath-kumar-1ab60829b</p>
      <p style={{color:"saffron"}}>{data.title}</p>
      <p style={{color:"royalblue"}}>{data.head}</p>
      <p style={{color:"green"}}>{data.date}</p>
      <p>{data.batch}</p>
    </div>
  )
}

export default Foote
{/* <button className="but" onClick={inc} style={{ backgroundColor:"red",borderRadius:"5px",color:"white" }}>REDDD</button>
      <button className="but" onClick={incc}  style={{ backgroundColor:"yellow",borderRadius:"5px",color:"white"}}>YELLOW</button>
      <button className="but" onClick={inccc}  style={{ backgroundColor:"green" ,borderRadius:"5px",color:"white"}}>GREEN</button>  */}


      // const [wcolor, setColor] = useState("white"); 
  // useEffect(() => {
  //   document.body.style.backgroundColor = wcolor;
  // }, [wcolor]);


  // function inc() {
  //   setColor('red');
  // }
  // function incc(){
  //   setColor('yellow')
  // }
  // function inccc(){
  //   setColor('green')
  // }
