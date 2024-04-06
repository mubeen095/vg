import React, { useMemo } from "react";
import Testimoni from "../../Testimoni";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-1"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
    
        <div className="flex flex-col w-full my-10" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-6/12 mx-auto"
            >
              Skill Garage: Let the experts do the talking.{" "}
            </motion.h3>
            
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col pt-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
