import { useState } from "react";
import { CarouselDemo } from "./components/carouselDemo/carouslDemo";
import { EmiCalculator } from "./components/emiCalculator/emiCalculator";

export function ConditionDemo() {
  const [view, setView] = useState(<EmiCalculator/>);

  function handelEmi() {
    setView(<EmiCalculator/>);
  }

  function handelCarousel() {
    setView(<CarouselDemo/>);
  }

  return(
    <div className="container-fluid my-2">
      <button className="btn btn-warning" onClick={handelEmi}>EMI Calculator</button>
      <button className="btn btn-danger mx-2" onClick={handelCarousel}>Carousel</button>
      <div>
        {view}
      </div>
    </div>
  );

}