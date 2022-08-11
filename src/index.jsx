import React from "react";
import { ReactDOM } from "react-dom";
import "./index.css";
import Home from "./components/screens/Home/Home";

ReactDOM.render(
    <React.StrictMode>
        <layout>
            <Home />
        </layout>
    </React.StrictMode>,
    document.getElementById("root")
);
