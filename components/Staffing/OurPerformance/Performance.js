import React, { useMemo } from "react";
import styles from "./Performance.module.css";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const Hero = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="max-w-screen-xl mt-4 px-8 xl:px-16 mx-auto">
      <div className={styles.performance_bg}>
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center">
              <strong>Skill Garage makes a case for our performance.</strong>
              </h1>
             
            </div>
     
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      </div>
    </>
  );
};

export default Hero;
