import {motion} from 'framer-motion';
import {styles} from '../utils/styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX}  absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5}`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#CD1A2F] mb-1'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#CD1A2F]'>Vivek Tripathi</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I work as a Java Backend Developer and Data Analyst.  <br className='sm:block hidden'/>
          <p style={{fontSize: 15}}>Building scalable backends with Java & Spring Boot while discovering data insights. 🚀</p></p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-1 bottom-2 right-9 w-full flex justify-center items-right'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero