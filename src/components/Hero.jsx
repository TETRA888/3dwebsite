import {motion} from 'framer-motion'
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import {StarsCanvas} from '../components';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">Hero
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}><span className='text-[#FF915E]'>Hi,</span> <span className='text-[#5EFF91]'>I'm</span>  <span className='text-[#915eff]'>Asad</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        A Computer Engineering student who merges technical precision with artistic vision in 3D
        <br className='sm:block hidden'/>
        </p>

      </div>
    </div>

    <StarsCanvas />

    <ComputersCanvas />
  
    <div className="absolute w-full flex justify-center items-center z-20" style={{ bottom: '200px' }}>
        <a href="https://github.com/TETRA888/CalculatedMonkeys" target="_blank" rel="noopener noreferrer" className="text-white text-sm">
          <p>View my model script on GitHub</p>
        </a>
    </div>

    <div className="absolute xs:bottom-10
    bottom-10 w-full flex justify-center items-center">
      <a href = "#about">
        <div className = "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
          animate = {{y:[0, 24, 0]}}
          transition = {{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className = "w-3 h-3 rounded-full bg-secondary mb-1"
          ></motion.div>
        </div>
      </a>
    </div>


    </section>
  )
}

export default Hero