import {motion} from 'framer-motion'
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">Hero
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Asad</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I'm a Computer Engineering student with a passion for combining technical and artistic skills in 3D graphics, VR, and AR. I have experience in programming for computer graphics, developing VR environments, and integrating hardware with software to create immersive digital experiences. 
        My expertise in Python and tools like Blender and Unreal Engine, along with my hands-on hardware knowledge, enables me to bring complex and creative ideas to life.
        <br className='sm:block hidden'/>
        </p>
      </div>
    </div>
    <ComputersCanvas />
    </section>
  )
}

export default Hero