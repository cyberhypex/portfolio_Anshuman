import React from "react";
import { motion } from "framer-motion";
import ansh from "../assets/Anshuman.png"

export function LandingPage() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <>

    <div>
         <motion.p
        className="italic md:not-italic text-4xl text-blue"
        animate={{ x: 100 }}
        transition={transition}
      >
        Hello, My name is Anshuman{" "}
        <span className="text-blue-700">
          I expertise in Backend Web Development
        </span>
      </motion.p>
    </div>
    <div>
        <motion.img
        src={ansh}
        animate={{x:20, y:5}}
        transition={transition}
        >


        </motion.img>

    </div>
     


    </>
  );
}
