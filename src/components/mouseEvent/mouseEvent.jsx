import { useState,useEffect } from "react";
import axios from "axios";
import './mouseEvent.css';

export function MouseEvent() {
  const[mobiles,setMobiles] = useState([{img_src:null}]);
  const[previewSrc,setPreviewSrc] = useState('m1.png');

  useEffect(()=>{
    axios.get('mobile.json').then((res) => {
      setMobiles(res.data);
    });
  },[]);

  function handelMouseOver(e) {
    setPreviewSrc(e.target.src);
  }

  return(
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-1">
          {
            mobiles.map(mobile => 
              <div className="my-4">
                <img className="container-style" onMouseOver={handelMouseOver} src={mobile.img_src} key={mobile.img_src} width='50px' height='50px'/>
              </div>
            )
          }
        </div>
        <div className="col-11">
          <img src={previewSrc} key={previewSrc}/>
        </div>
      </div>
    </div>
  );
}