import React from 'react';
import './App.css';
import Landing from "./pages/Home/Landing";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/About' component={About}/>
                    <Route exact path='/Projects' component={Projects}/>
                    <Route exact path='/' component={Landing}/>
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
