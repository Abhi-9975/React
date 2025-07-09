// import React from "react";
//  function App(){
//   var admin=false
//   return(
//     <div>
// <h1>{admin ? "hello admin": "hello user"}</h1>
//     </div>
//   )
//  }

//  export default App

// import React from "react";
// function App(){
//   var admin= true
//   var content
//   if(admin){
//       content="hello admin"
//   }
//   else{
//       content="hello user"
//   }
//   return(
//     <div>{content}</div>
//   )
// }
// export default App

// import React from "react";
// import Nav from "./nav";
// import Header from "./header";
// function App(){
//   var admin=true
//   var content
//   if(admin){
//     content=<Nav/>
//   }
//   else{
//     content=<Header/>
//   }
//   return(
//     <div>{content}</div>
//   )
// }
// export default App

// import React, { useState } from "react";
// function App(){
//   var [count,setCount]=useState(0)
//   function Inc(){
//     return setCount(count+1)
//   }
//   function Dec(){
//     return setCount(count-1)
//   }
//   function reset(){
//     return setCount(0)
//   }
  
//   return(
//     <div>
//       <button onClick={Inc}>Inc</button>
//       <h1>{count}</h1>
//       <button onClick={Dec}>Dec</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }
// export default App

import React, { useState } from "react";

function App(){
  var [count,setCount]=useState(0)
  return(
    <div>
      <button onClick={()=>{setCount(count+1)}}>Inc</button>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count-1)}}>Dec</button>
      <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}
export default App