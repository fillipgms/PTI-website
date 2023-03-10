import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../services/firebase";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { async } from "@firebase/util";

const StateContext = createContext();
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const ContextProvider = ({ children }) => {
    const auth = getAuth(app);

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [profileMenu, setProfileMenu] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [user, setUser] = useState("");
    const [currentMode, setCurrentMode] = useState("light");
    const [loginError, setLoginError] = useState("");

    const setMode = () => {
        localStorage.setItem(
            "themeMode",
            localStorage.getItem("themeMode") === "light" ? "dark" : "light"
        );
        setCurrentMode(localStorage.getItem("themeMode"));
    };

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionUser = localStorage.getItem("@AuthFirebase:user");
            if (sessionUser) {
                setUser(JSON.parse(sessionUser));
            }
        };
        const setMode = () => {
            setCurrentMode(localStorage.getItem("themeMode"));
            if (localStorage.getItem("themeMode") === null) {
                localStorage.setItem("themeMode", "light");
            }
        };
        loadStoreAuth();
        setMode();
    }, []);

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                localStorage.setItem(
                    "@AuthFirebase:user",
                    JSON.stringify(user)
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
        return;
    };

    const createUser = async (e) => {
        e.preventDefault();
        if (password === passwordRepeat) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (result) => {
                    const user = result.user;
                    setUser(user);
                    await updateProfile(user, {
                        displayName: username,
                    });
                    localStorage.setItem(
                        "@AuthFirebase:user",
                        JSON.stringify(user)
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("senhas diferentes");
        }
    };

    const signInUser = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                const user = result.user;
                setUser(user);
                localStorage.setItem(
                    "@AuthFirebase:user",
                    JSON.stringify(user)
                );
            })
            .catch((error) => {
                setLoginError(error);
                console.log(error);
            });
    };

    function signOut() {
        localStorage.removeItem("@AuthFirebase:user");
        setUser(null);

        return <Navigate to="/" />;
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                screenSize,
                setScreenSize,
                signInGoogle,
                signed: !!user,
                user,
                signOut,
                profileMenu,
                setProfileMenu,
                username,
                setUsername,
                email,
                setEmail,
                password,
                setPassword,
                passwordRepeat,
                setPasswordRepeat,
                createUser,
                signInUser,
                currentMode,
                setMode,
                loginError,
                setLoginError,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
