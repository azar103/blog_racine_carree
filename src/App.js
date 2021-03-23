import React, {useState, useEffect} from 'react';
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import {BrowserRouter,Switch, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
       <Route  path="/page/:id" component={Home}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
