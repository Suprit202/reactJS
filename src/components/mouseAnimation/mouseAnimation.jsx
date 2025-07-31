import { useState,useEffect } from "react";
import './mouseAnimation.css';

 export function MouseAnimation(){

  const [styleObj, SetStyleObj] = useState({
    animationName:'Spin',
    animationDuration:'5s',
    animationIterationCount:'infinite',
    animationTimingFunction:'linear'
  })

  function handleMouseDown(){     
    SetStyleObj({
    animationName:'Spin',
    animationDuration:'1s',
    animationIterationCount:'infinite',
    animationTimingFunction:'linear'
  });
  }

  function handelMouseUp() {
    SetStyleObj({
      animationName:'Spin',
      animationDuration:'5s',
      animationIterationCount:'infinite',
      animationTimingFunction:'linear'
    })
  }

  return(
    <div className="fluid-container d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
      <div>
        <img onMouseDown={handleMouseDown} onMouseUp={handelMouseUp} style={styleObj} src="image/react.svg" width={200} height={200}/>
      </div>
    </div>
  );
 }