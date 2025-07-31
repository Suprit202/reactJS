import { useState } from "react";

export function MouseMove() {
  const[imgPosition,setImgPosition] = useState({position:null,top:null,left:null})

  function handelMouseMove(e) {
    setImgPosition({position:'fixed', left:e.clientX+'px', top:e.clientY+'px'})
  }

  return(
    <div onMouseMove={handelMouseMove}>
      <div style={{height:'100vh'}}>
        <h1>Move Your Mouse Pointer To Test</h1>
      </div>

      <img src="image/v1.jpg" style={imgPosition} height='50px' width='50px'/>
      
      
    </div>
  );
}