import { AiFillHome } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { BsPersonCircle, BsStarFill } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { IoMdPlanet } from "react-icons/io";

export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const links = [
    {
        title: "início",
        links: [
            {
                name: "Home",
                icon: <AiFillHome />,
                url: "",
            },
        ],
    },
    {
        title: "Crypto",
        links: [
            {
                name: "notícias",
                icon: <IoMdPlanet />,
                url: "news",
            },
            {
                name: "criptomoedas",
                icon: <FaBitcoin />,
                url: "coins",
            },
            {
                name: "moedas favoritas",
                icon: <BsStarFill />,
                url: "favorite-coins",
            },
        ],
    },
    {
        title: "Guia",
        links: [
            {
                name: "Como começar",
                icon: <BiBook />,
                url: "guide",
            },
        ],
    },
    {
        title: "perfil",
        links: [
            {
                name: "meu perfil",
                icon: <BsPersonCircle />,
                url: "profile",
            },
        ],
    },
];
