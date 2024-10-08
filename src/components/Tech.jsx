import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
          <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          The Tools I like to use
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        <span className='text-[#5EFF91]'>Tech</span> <span className='text-[#915eff]'>Stack.</span>
        </h2>
      </motion.div>
    
    <div className = "flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div classname = "w-28 h-28 key = {technology.name}">
          <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");