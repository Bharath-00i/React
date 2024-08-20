// import React, { useState } from "react";
// import { BiSolidLeaf } from "react-icons/bi";
// import SfNav from "./Components/SfNav";
// import Test from "./Components/Test";
// import Fun from "./Components/Fun";
// import Butttn from "./Components/Butttn";
// import Linux from "./Components/Linux";

// const App = () => {
//   const [message, setMessage] = useState('WeLcOmE tO mY pAgE');
  
//   return (
//     <div
//       id="App"
//       style={{ display: "flex", justifyContent: "center", backgroundColor: "black" }}
//     >
//       <div
//         style={{
//           width: "50%",
//           display: "grid",
//           justifyContent: "center",
//           backgroundColor: "black",
//           border: "0.1px solid white",
//         }}
//       >
//         <h1 style={{ fontFamily: "Cosmopolitan", color: "white" }}>{message}</h1>
//         <p style={{ color: "white" }}>
//           KAVITHAI.KADHALAN <BiSolidLeaf style={{ alignItems: "center" }} /> 1W AgO...
//         </p>
//         <Fun />
//         <br />
//         <Butttn />
//         <p style={{ color: "white" }}>
//           KAVITHAI.KADHALAN <BiSolidLeaf style={{ alignItems: "center" }} /> 1D AgO...
//         </p>
//         <Test />
//         <br />
//         <Butttn />
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <button
//             onClick={() => setMessage("ThAnKyOu FoR pOsTiNg")}
//             style={{
//               backgroundColor: "black",
//               color: "white",
//               height: "20px",
//               width: "80px",
//               borderStyle: "solid",
//               borderColor: "white",
//             }}
//           >
//             ThAnKyOu
//           </button>
//         </div>
//       </div>
//       <SfNav />
//       <Linux />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react'
import NewComponent ,{NewComponent4}from "./Components/NewComponent";
import Foote from './Components/Foote';
import Navbar from './Components/Navbar';

const App = () => {
  
  return (
    <div>
      <Navbar/>
      {/* <NewComponent title="props topic" content="this is coooooo"/><br />
      <Foote title="rrrrrrrrrrrrrr" head={1} date="44" batch="bharath"/><br />
      <NewComponent4/> */}
    </div>
  )
}

export default App

