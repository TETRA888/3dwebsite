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
        <h2 className= {styles.sectionHeadText}>Professional Summary.</h2>
      </motion.div>
      <motion.p
        variants = {fadeIn("", "", 0.1, 1)}
        className="text-center mt-4 text-secondary  max-w-7xl  text-justify text-2xl">
          <span>
            I am currently pursuing my passion at the University of California, Davis, where I am engaged in developing VR-ready environments for research in E-Commerce under professor Pantelis Loupos. This work involves creating
            immersive virtual spaces and integrating advanced technologies like computer vision, machine learning, and generative AI to enhance user experiences. Collaborating with industry professionals, I work on innovative projects that bridge theoretical research with practical applications.
          </span>
          <span className="block mt-4">
            At the UC Davis Pavement Research Center, I contribute to building and programming systems for monitoring and data collection in pavement applications. My role involves programming and
            implementing a data-logging system to improve test-track testing and analysis for Caltrans.
          </span>
          <span className="block mt-4">
            In my role as Co-Chair of the UC Davis Council on Student Affairs and Fees, I oversee substantial student funds, ensuring transparency and effective allocation to support co-curricular
            programs. This position allows me to engage in high-level discussions and contribute to strategic decision-making at the university.
          </span>
          <span className="block mt-4">
            My projects reflect my commitment to merging technology with practical solutions. From developing a pipeline for generating 3D meshes using cutting-edge techniques to designing RF circuits
            for a custom RC rover, my work spans various fields, including 3D modeling, generative AI, and hardware design. These experiences have fueled my interest in creating innovative solutions
            that blend AI, VR, AR, and hardware.
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