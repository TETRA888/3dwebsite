import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options = {{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className= "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
      <img src = {icon} alt = {title} 
        className= "w-16 h-16 object-contain" />
        <h3 classname = "text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      </motion.div>  
    </Tilt>
  )
}

const About = () => {
  return (
    <section className="flex flex-col items-center">
      <motion.div variants = {textVariant()} className = "text-center">
        <p className= {styles.sectionSubText}>Introduction</p>
        <h2 className= {styles.sectionHeadText}><span className='text-[#FF915E]'> Professional </span> <span className='text-[#5EFF91]'>Summary.</span></h2>
      </motion.div>
      <motion.p
        variants = {fadeIn("", "", 0.1, 1)}
        className="text-center mt-4 text-secondary  max-w-7xl  text-justify text-2xl">
          <span>
            Driven by a passion for blending technology with creative solutions. My work spans various fields, including VR/AR, 3D modeling, generative AI, and hardware design, where I strive to push the boundaries of what's possible.
          </span>
          <span className="block mt-4">
            I enjoy creating immersive virtual environments, experimenting with cutting-edge AI techniques, and building systems that solve real-world problems.
          </span>
          <span className="block mt-4">
            My roles and projects reflect a commitment to innovation, collaboration, and making a meaningful impact through technology. 
          </span>
          <span className="block mt-4">
            Whether it's developing pipelines for 3D mesh generation or overseeing student funds to enhance campus life, I bring a blend of technical expertise and strategic thinking to everything I do.
          </span>
      </motion.p>
      <div className = "mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about")