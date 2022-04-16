import React from "react";
import "./styles/App.css";

import Controls from "./components/Controls";

function App() {
    Controls();

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;


/*
    ardon - arduino car control app

    arduino:
    https://www.youtube.com/watch?v=6hpIjx8d15s
    https://www.youtube.com/watch?v=s_2cw0k6lgs

    typescript:
    https://www.youtube.com/watch?v=NjN00cM18Z4
*/