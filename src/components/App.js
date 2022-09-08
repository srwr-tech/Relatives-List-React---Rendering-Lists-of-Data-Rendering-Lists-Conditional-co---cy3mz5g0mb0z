import React, { Component, useState } from "react";
import '../styles/App.css';

function App() {

    const [list, setList] = useState([
        'Sample 1',
        'Sample 2'
    ]);

    return (
        <div id="main">
            {
                <ol key="relativeList">
                    {
                        list.map((item, index) => (
                            <li key={`relativeListItem${index + 1}`}>{item}</li>
                        ))
                    }
                </ol>
            }
        </div>
    )
}


export default App;
