import React from 'react';
import './App.scss';
import Home from "./components/home/home";
import './base-href-interceptor';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SingleShow from "./components/single-show/single-show";

function App() {
    return (
        <Router>
        <div>

            <div className="header">
                <h1> The Angular-2-React Show</h1>
          </div>


        </div>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/show/:id" exact={true} component={SingleShow}/>

        </Router>

    );
}

export default App;
