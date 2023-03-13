import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/routes";

import { Navbar, Sidebar } from "./components";
import { motion } from "framer-motion";
import { slideIn } from "./data/dummy";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
    const { activeMenu, currentMode } = useStateContext();

    return (
        <div
            className={
                localStorage.getItem("themeMode") === "dark" ? "dark" : ""
            }
        >
            <div className="flex relative dark:bg-main-dark-bg">
                <aside
                    className="fixed sidebar dark:bg-secondary-dark-bg bg-white overflow-hidden transition-all ease-in-out duration-150"
                    style={activeMenu ? { width: "18rem" } : { width: "0" }}
                >
                    <Sidebar />
                </aside>

                <div
                    className={
                        activeMenu
                            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full relative "
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 relative"
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                    <div>
                        <AppRoutes />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
