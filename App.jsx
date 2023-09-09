import React, { useState } from 'react'
let r=0;
const App = () => {
     const[num,Setnum]=useState(r);
     const incre=()=>{
        r=r+1;
        Setnum(r);
     }
     const decre=()=>{
          if(r<0){
            alert("out of flow");
          }
          else{
            r=r-1;
          Setnum(r);
          }
     }
  return (
    <>
    <div className="main_div">
    <div className="center_div">
      <h1>{num}</h1>
      <div className="btn_div">
      <button onClick={incre}>Increm</button>
      <button onClick={decre}>Decrem</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
