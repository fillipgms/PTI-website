import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    BsFillMoonStarsFill,
    BsFillSunFill,
    BsFillMoonFill,
} from "react-icons/bs";

import { AiOutlineCloseCircle } from "react-icons/ai";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentMode, setMode } =
        useStateContext();

    const activeLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black dark:text-white text-md m-2 bg-[#6EE7B7] dark:bg-[#6639E4]";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray m-2 dark:hover:bg-main-dark-bg/50";

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <span
                            onClick={() =>
                                setActiveMenu(
                                    (prevActiveMenu) => !prevActiveMenu
                                )
                            }
                            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                        >
                            <BsFillMoonStarsFill />
                            <span>Nome do Site</span>
                        </span>
                        <button
                            type="button"
                            onClick={() =>
                                setActiveMenu(
                                    (prevActiveMenu) => !prevActiveMenu
                                )
                            }
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden dark:text-white dark:hover:bg-secondary-dark-bg/90"
                        >
                            <AiOutlineCloseCircle />
                        </button>
                    </div>
                    <nav className="mt-10">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.url}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        {link.icon}
                                        <span className="capitalize">
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </nav>
                    <div className="mt-10 w-full">
                        <button
                            onClick={setMode}
                            className="py-3 capitalize px-5 dark:text-white flex items-center gap-3 w-full"
                        >
                            {currentMode === "dark" ? (
                                <BsFillSunFill />
                            ) : (
                                <BsFillMoonFill />
                            )}
                            {currentMode === "dark"
                                ? "tema claro"
                                : "tema escuro"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
