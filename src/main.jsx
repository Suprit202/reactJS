import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataBinding } from './components/data-binding/dataBinding.jsx'
import { DataType } from './components/data-type/data-type.jsx'
import { Ajax } from './components/ajax/ajax.jsx'
import { ClassBinding } from './components/classBinding/classBinding.jsx'
import { EventBinding } from './components/eventBinding/eventBinding.jsx'
import { EventArgument } from './components/eventArgument/eventArgument.jsx'
import { EventPropagation } from './components/eventPropagation/eventPropagation.jsx'
import { TwoWayBind } from './components/twoWayBind/twoWayBind.jsx'
import { Form } from './components/form/form.jsx'
import { Login } from './components/login/login.jsx'
import { NetflixIndex } from './components/Netflix/netflix-index.jsx'
import { MouseEvent } from './components/mouseEvent/mouseEvent.jsx'
import { KeyBoardEvent } from './components/keyBoardEvent/keyBoardEvent.jsx'
import { EmiCalculator } from './components/emiCalculator/emiCalculator.jsx'
import { CarouselDemo } from './components/carouselDemo/carouslDemo.jsx'
import { FormDemo } from './components/formDemo/formDemo.jsx'
import { StopWatch } from './components/stopWatch/stopWatch.jsx'
import { MouseAnimation } from './components/mouseAnimation/mouseAnimation.jsx'
import { MouseMove } from './components/mouseMove/mouseMove.jsx'
import { ThrottleDemo } from './components/throttleDemo/throttleDemo.jsx'
import { ButtonDemo } from './components/buttonEvent/buttonEvent.jsx'
import { FormUsingFormik } from './components/formUsingFormic/formUsingFormik.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DataBinding/> */}
    {/* <DataType/> */}
    {/* <Ajax/> */}
    {/* <Form /> */}
    {/* <Login/> */}
    {/* <NetflixIndex/> */}
    {/* <ClassBinding/> */}
    {/* <EventBinding/> */}
    {/* <EventArgument/> */}
    {/* <EventPropagation/> */}
    {/* <TwoWayBind/> */}
    {/* <MouseEvent/> */}
    {/* <MouseAnimation/> */}
    {/* <MouseMove/> */}
    {/* <KeyBoardEvent/> */}
    {/* <EmiCalculator/> */}
    {/* <ButtonDemo/> */}
    {/* <ThrottleDemo/> */}
    {/* <StopWatch/> */}
    {/* <CarouselDemo/> */}
    {/* <FormDemo/> */}
    <FormUsingFormik/>
  </StrictMode>
)
