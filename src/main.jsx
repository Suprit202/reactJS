import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataBinding } from './components/data-binding/dataBinding.jsx'
import { DataType } from './components/data-type/data-type.jsx'
import { Ajax } from './components/ajax/ajax.jsx'
import { ClassBinding } from './components/classBinding/classBinding.jsx'
import { Form } from './components/form/form.jsx'
import { Login } from './components/login/login.jsx'
import { NetflixIndex } from './components/Netflix/netflix-index.jsx'
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
    <ClassBinding/>
  </StrictMode>,
)
