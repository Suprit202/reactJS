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
import { FormDemo1 } from './components/formDemo1/formDemo1.jsx'
import { FormNew } from './form-new.jsx'
import { ConditionDemo } from './coditionalDemo.jsx'
import { ControlledDemo } from './controlled-demo.jsx'
import { ControlledDemo1 } from './controlledDemo1.jsx'
import { DataTable } from './components/dataTable/dataTable.jsx'
import { ReactHook } from './components/reactHook/reactHook.jsx'
import { SimpleDataIO } from './components/simpleDataIO/simpleDataIO.jsx'
import { ContextDemo } from './components/useContext/useContext.jsx'
import { FakestoreIndex } from './components/fakestore-index/fakestore-index.jsx'
import { ReducerDemo } from './components/useReduce/useReduce.jsx'
import { ReactRout } from './components/reactRouts/reactRouts.jsx'
import { ShoppingIndex } from './shopping/shopping-index.jsx'
import { VideoTutorialIndex } from './videoTutorial/videoTutorialIndex.jsx'
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { CustomerLogin } from './components/class/custumer-login.jsx'
import { Bind } from './components/class/binding.jsx'
import { Api } from './components/class/api.jsx'
import { FormicLogin } from './components/class/formic.jsx'
import { ClassControlComp } from './classControlComponent.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

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
    {/* <FormUsingFormik/> */}
    {/* <FormDemo1/> */}
    {/* <ReactHook/> */}
    {/* <FormNew/> */}
    {/* <ControlledDemo/> */}
    {/* <ConditionDemo/> */}
    {/* <ControlledDemo1/> */}
    {/* <DataTable/> */}
    {/* <SimpleDataIO/> */}
    {/* <ContextDemo/> */}
    {/* <FakestoreIndex/> */}
    {/* <ReducerDemo/> */}
    {/* <ReactRout/> */}
    {/* <ShoppingIndex/> */}

    {/* <CookiesProvider>
      <ThemeProvider theme={theme}>
        <VideoTutorialIndex/>
      </ThemeProvider>
    </CookiesProvider> */}

    {/* <CustomerLogin/> */}
    {/* <Bind/> */}
    {/* <Api/> */}
    {/* <FormicLogin/> */}
    <ClassControlComp/>

  </StrictMode>
)
