import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../HOC'
import { technologies } from '../utils/constants'
import { styles } from "../utils/styles";

const Tech = () => {
  // return (
  //   <div className='flex flex-row flex-wrap justify-center gap-10'>
  //     <h2 className={styles.sectionHeadText}>Overview.</h2>
  //     {technologies.map((technology) => (
  //       <div className='w-28 h-28' key={technology.name}>
  //         <BallCanvas icon={technology.icon} />
  //       </div>
  //     ))}
  //   </div>
  // )
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {/* Heading - Full Width Block */}
      <h5 className={`${styles.sectionSubHeadText} w-full`}>Technologies I Have Worked On.</h5>
  
      {/* Technologies - Centered */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className={`${styles.sectionSubTextTech} text-center`}>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );  
}

export default SectionWrapper(Tech, "techStack")