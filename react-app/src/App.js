import React from 'react';
import './App.scss';
import Home from "./components/home/home";
import './base-href-interceptor';

function App() {
    return (
        <div>

            <div className="header">
                <h1> The Angular-2-React Show</h1>
            </div>
            <Home/>

        </div>

    );
}

export default App;
