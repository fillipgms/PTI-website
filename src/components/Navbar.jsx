import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ProfileLogoff } from "./";

const demoImage =
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
const NavButton = ({ customFunc, icon, dotColor }) => (
    <button
        type="button"
        onClick={customFunc}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray text-dark dark:text-white dark:hover:bg-secondary-dark-bg/50"
    >
        <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
    </button>
);

const Navbar = () => {
    const { user, signed, setProfileMenu, profileMenu } = useStateContext();

    const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
        useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <header className="flex justify-between p-2 md:mx-6 relative items-center">
            <NavButton
                title="Menu"
                customFunc={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                icon={activeMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            />
            {signed ? (
                <div
                    className="flex items-center gap-2 p-1 hover:bg-light-gray rounded-lg cursor-pointer dark:hover:bg-secondary-dark-bg/50"
                    onClick={() => setProfileMenu(!profileMenu)}
                >
                    <p>
                        <span className="text-gray-400 text-14">
                            Bem-vindo,
                        </span>{" "}
                        <span className="text-gray-400 font-bold ml-1 text-14">
                            {signed && user.displayName}
                        </span>
                    </p>
                    <MdKeyboardArrowDown
                        className="text-gray-400 text-14 transition-transform"
                        style={
                            profileMenu
                                ? { transform: "rotate(180deg)" }
                                : { transform: "rotate(0)" }
                        }
                    />
                </div>
            ) : (
                <div className="flex gap-3">
                    <Link to="/signin" className="contents">
                        <span className="bg-[#6EE7B7] dark:bg-[#6639E4] dark:text-white text-dark font-bold py-1 px-4 rounded h-fit">
                            Iniciar seção
                        </span>
                    </Link>
                    <Link to="/signup" className="contents">
                        <button className=" h-fit rounded-md p-0.5 bg-gradient-to-r from-[#6EE7B7] via-[#6639E4] to-[#6EE7B7] hover:bg-pos-100 bg-size-200 bg-pos-0 transition-all duration-500 focus:bg-pos-100 disabled">
                            <span className="flex font-bold px-4 py-0.5 h-full bg-white dark:bg-main-dark-bg rounded text-dark dark:text-white">
                                Criar conta
                            </span>
                        </button>
                    </Link>
                </div>
            )}
            {profileMenu ? <ProfileLogoff /> : ""}
        </header>
    );
};

export default Navbar;
