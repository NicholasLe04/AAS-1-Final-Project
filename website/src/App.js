import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="header">
                <h1>ASIAN AMERICAN STUDIES</h1>
                <h3>By: Nicholas Le</h3>
            </div>
            <Dashboard />
        </BrowserRouter>
    );
}

export default App;
