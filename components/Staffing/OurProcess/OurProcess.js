import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const Hero = ( ) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="max-w-screen-xl px-8 xl:px-16 mx-auto" id="about">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-8"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Our methodology is the foundation of <strong>our success</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Skill Garage's recruiting approach is designed to provide bespoke solutions that match the best individuals to your unique needs.</p>
              
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/staffing/methodology.png"
                  alt="Staffing"
                  quality={100}
                  width={500}
                  height={200}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default Hero;
