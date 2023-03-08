"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-6 lg:bottom-20 left-10 lg:left-20 w-[200px] lg:w-[260px] h-[140px] lg:h-[190px] p-[8px] rounded-[24px] bg-[#5d66807c] flex justify-center ">
          <img src="/world.png" alt="people" className="w-full h-full " />
          <div className="absolute bottom-16 flex items-center gap-2 z-10">
            <div className="flex items-center relative w-16">
              <img
                className="absolute left-0 object-contain w-[30px] h-[30px]"
                src="/Ellipse.svg"
                alt=""
              />
              <img
                className="absolute left-4  w-[30px] h-[30px]"
                src="/Ellipse2.svg"
                alt=""
              />
              <img
                className="absolute left-8 w-[30px] h-[30px]"
                src="/Ellipse3.svg"
                alt=""
              />
            </div>
            <p className="text-white text-[12px] lg:text-[14px]">
              +264 has joined
            </p>
          </div>
          <p className="text-white absolute bottom-6 text-[18px] lg:text-[22px] font-semibold ">
            The Upside Down
          </p>
        </div>
        <div className="absolute bottom-80 lg:bottom-60 right-16 w-[200px] lg:w-[260px] h-[140px] lg:h-[190px] p-[8px] rounded-[24px] bg-[#5d66807c] flex justify-center">
          <img src="/world2.png" alt="people" className="w-full h-full" />
          <div className="absolute bottom-16 flex items-center gap-2 ">
            <div className="flex items-center relative w-16">
              <img
                className="absolute left-0 object-contain w-[30px] h-[30px]"
                src="/Ellipse.svg"
                alt=""
              />
              <img
                className="absolute left-4  w-[30px] h-[30px]"
                src="/Ellipse2.svg"
                alt=""
              />
              <img
                className="absolute left-8 w-[30px] h-[30px]"
                src="/Ellipse3.svg"
                alt=""
              />
            </div>
            <p className="text-white text-[12px] lg:text-[14px]">
              +168 has joined
            </p>
          </div>
          <p className="text-white absolute bottom-6  text-[18px] lg:text-[22px] font-semibold ">
            Hawkins Lab
          </p>
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
