import React from "react";
import ReactDOM from "react-dom";
import Header from 'mfe1/Header';
import Footer from 'mfe1/Footer';

import "./index.css";

const App = () => (
    <div className="container">
        <Header/>
        <div>Name: mfe2</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <Footer/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById("app"));
