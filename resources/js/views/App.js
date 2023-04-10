import React from 'react';
import ReactDOM from 'react-dom';
import "../css/app.css"

export default function App() {
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
