"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.dev
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    ></motion.dev>
  </section>
);

export default Hero;
