import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <h1>ASIAN AMERICAN STUDIES</h1>
            <Dashboard />
        </BrowserRouter>
    );
}

export default App;
