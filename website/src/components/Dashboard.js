import React from "react";
import "./dashboard.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import TimeLinePage from "./TimelinePage";
import Definitions from "./Definitions";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => navigate("/timeline")}>
                            TIMELINE
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/definitions")}>
                            DEFINITIONS
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="main-content">
                <Routes>
                    <Route path="/" exact element={<TimeLinePage />} />
                    <Route path="/timeline" exact element={<TimeLinePage />} />
                    <Route path="/definitions" element={<Definitions />} />
                </Routes>
            </div>
        </>
    );
};

export default Dashboard;
