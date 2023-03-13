import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";

const SignUp = () => {
    const [inputType, setInputType] = useState(false);
    const [inputTypeRepeat, setInputTypeRepeat] = useState(false);
    const {
        signInGoogle,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        passwordRepeat,
        setPasswordRepeat,
        createUser,
    } = useStateContext();

    const handleChange = () => {
        setInputType(!inputType);
    };
    const handleChangeRepeat = () => {
        setInputTypeRepeat(!inputTypeRepeat);
    };

    async function loginGoogle() {
        await signInGoogle();
    }

    return (
        <div className="mx-auto p-4">
            <div className="shadow-xl dark:bg-secondary-dark-bg bg-light-gray rounded-md px-4 relative">
                <div className="rounded-full absolute dark:bg-secondary-dark-bg bg-slate-50 left-1/2 -translate-x-1/2 -top-10 w-20 h-20 flex items-center justify-center shadow-xl text-xl dark:text-white">
                    <BsFillMoonStarsFill />
                </div>
                <form
                    action="#"
                    className="text-center pt-14 pb-7 md:px-8 px-5 flex flex-col gap-4"
                    onSubmit={createUser}
                >
                    <h1 className="font-bold text-xl uppercase dark:text-white text-dark">
                        Inscreva-se
                    </h1>
                    <input
                        name="nameInput"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nome"
                        className="w-full p-2.5 box-border rounded-sm dark:bg-dark-secondary focus:outline-none border-b-2 dark:border-[#6639E4] bg-gray-50 dark:focus:border-[#6EE7B7] border-[#6EE7B7] focus:border-[#6639E4] transition-all dark:text-white"
                        maxLength={20}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2.5 box-border rounded-sm dark:bg-dark-secondary focus:outline-none border-b-2 dark:border-[#6639E4] bg-gray-50 dark:focus:border-[#6EE7B7] border-[#6EE7B7] focus:border-[#6639E4] transition-all dark:text-white"
                    />
                    <label className="relative">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={inputType ? "text" : "password"}
                            placeholder="Senha"
                            className="w-full p-2.5 box-border rounded-sm dark:bg-dark-secondary focus:outline-none border-b-2 dark:border-[#6639E4] bg-gray-50 dark:focus:border-[#6EE7B7] border-[#6EE7B7] focus:border-[#6639E4] transition-all dark:text-white"
                        />
                        <span
                            onClick={handleChange}
                            className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3 text-lg dark:text-white"
                        >
                            {inputType ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                    </label>
                    <label className="relative">
                        <input
                            value={passwordRepeat}
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                            type={inputTypeRepeat ? "text" : "password"}
                            placeholder="Repita sua senha"
                            className="w-full p-2.5 box-border rounded-sm dark:bg-dark-secondary focus:outline-none border-b-2 dark:border-[#6639E4] bg-gray-50 dark:focus:border-[#6EE7B7] border-[#6EE7B7] focus:border-[#6639E4] transition-all dark:text-white"
                        />
                        <span
                            onClick={handleChangeRepeat}
                            className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3 text-lg dark:text-white"
                        >
                            {inputTypeRepeat ? (
                                <AiFillEyeInvisible />
                            ) : (
                                <AiFillEye />
                            )}
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#6EE7B7] via-[#6639E4] to-[#6EE7B7] text-white dark:text-dark-secondary font-bold p-1 rounded md:w-9/12 mx-auto h-fit mt-3 w-full hover:bg-pos-100 bg-size-200 bg-pos-0 transition-all duration-500 focus:bg-pos-100 hover:shadow-lg shadow-[#6EE7B7]/50 dark:shadow-[#6639e4]/50"
                    >
                        <span className="flex font-bold items-center justify-center px-4 py-2 h-full bg-white dark:bg-main-dark-bg rounded-sm text-dark dark:text-white">
                            Criar conta
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={loginGoogle}
                        className="flex items-center justify-center bg-white gap-2 py-3 px-4 rounded border-slate-600 drop-shadow-md md:w-9/12 mx-auto h-fit w-full"
                    >
                        <FcGoogle />
                        Entrar com Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
