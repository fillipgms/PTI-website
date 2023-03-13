import React from "react";
import { motion } from "framer-motion";

import { useStateContext } from "../contexts/ContextProvider";
import { errorInOut } from "../data/dummy";

const Error = () => {
    const { loginError } = useStateContext();

    return (
        <>
            {loginError ? (
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 py-3 px-10 rounded-sm text-white bold shadow-md"
                    variants={errorInOut("up", "Spring", 0, 0.2)}
                    initial="hidden"
                    whileInView="show"
                >
                    <span>{loginError.code}</span>
                </motion.div>
            ) : (
                ""
            )}
        </>
    );
};

export default Error;
