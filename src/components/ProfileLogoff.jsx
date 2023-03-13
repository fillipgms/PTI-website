import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

const demoImage =
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

const ProfileLogoff = () => {
    const { user, setProfileMenu, signOut, signed } = useStateContext();

    const signout = () => {
        signOut();
        setProfileMenu(false);
    };

    return (
        <div className="absolute right-1 md:m-0 mx-3 top-16 bg-white dark:bg-dark p-8 rounded-lg w-64 z-50 shadow-xl">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-lg dark:text-slate-100">
                    Ajustes Rápidos
                </span>
                <span
                    onClick={() => setProfileMenu(false)}
                    className="cursor-pointer dark:text-slate-100"
                >
                    <AiOutlineClose />
                </span>
            </div>
            <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6 overflow-hidden">
                <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                        {signed && user.displayName}
                    </p>
                    <p className="font-semibold ml-2 text-lg dark:text-slate-300 text-slate-400">
                        {signed && user.email}
                    </p>
                </div>
            </div>
            <div className="border-color border-b-1">
                <Link
                    to="/profile"
                    className="flex items-center py-3 px-5 dark:text-white gap-3  "
                >
                    <BsFillGearFill />
                    Configurações
                </Link>
            </div>

            <div className="mt-5">
                <button
                    type="button"
                    className="bg-gradient-to-r from-[#6EE7B7] via-[#6639E4] to-[#6EE7B7] text-white dark:text-dark-secondary hover:shadow-lg shadow-[#6EE7B7]/50 dark:shadow-[#6639e4]/50 hover:bg-pos-100 bg-size-200 bg-pos-0 transition-all duration-500 focus:bg-pos-100  font-bold py-0.5 px-1 rounded h-fit w-full"
                    onClick={signout}
                >
                    <span className="flex font-bold items-center justify-center px-2 py-0.5 h-full bg-white dark:bg-main-dark-bg rounded-sm text-dark dark:text-white">
                        Sair
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProfileLogoff;
