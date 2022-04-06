import React from 'react'
import {
    Route,
    Switch,
    Redirect
  } from "react-router-dom"

import './App.css';
import Basket from './BasketPage/Basket';
import Catalog from './CatalogPage/Home';
// import '../Components/Menu';




export default function App({ history, ...props }) {

  return (
    <div className="mainBody"> 
        <Switch>
            <Route path="/Basket" component={Basket}/>
            <Route path="/Catalog" component={Catalog}/>
            <Redirect from='/' to='/welcome'/>
        </Switch>
    </div>
  )
}
