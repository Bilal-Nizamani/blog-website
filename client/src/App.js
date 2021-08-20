import React from "react";

import "./App.css"

import { Switch, Route  } from "react-router-dom";
import { Box } from "@material-ui/core";

import Navbar from './components/Navbar'
import Home from "./components/home/Home";
import DetailView from "./components/home/post/DetailView";
import Create from "./components/home/post/Create";
import Update from "./components/home/post/Update";

import Signin from "./components/login/Signin";
import Signup from "./components/signup/Signup";



function App() {




    return <>
      


            <Navbar/>
            <Switch>
                <Box style={{ marginTop: 64 }}>

                    <Route exact path='/' component={Home} />

                    <Route exact path='/detail/:id' component={DetailView} />
                    <Route exact path='/create' component={Create} />
                    <Route exact path='/update/:id' component={Update} />
                    <Route exact path='/signin' component={Signin} />
                    <Route exact path='/signup' component={Signup} />

                </Box>

            </Switch>

    </>
}

export default App;

