import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from "./page/HomePage";
import Productpage from './page/Productpage';
import Updatepage from './page/Updatepage';
import Descriptionpage from "./page/Descriptionpage";
import AddProductpage from './page/AddProductpage';
function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Productpage' element={<Productpage/>}></Route>
            <Route path='/Updatepage' element={<Updatepage/>}></Route>
            <Route path='/AddProductpage' element={<AddProductpage/>}></Route>
            <Route path='/Descriptionpage/:_id' element={<Descriptionpage/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes
