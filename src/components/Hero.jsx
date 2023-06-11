import React from 'react';
import styles from '../style';
import { shuraig } from '../assets';

const Hero = () =>(
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img 
      src={shuraig} 
      alt='shuraig' 
      className='max-w-full h-auto relative z-[5] px-10'
      />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] left-20 bottom-20 blue__gradient'/>
    </div>
    
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0, sm:px-16, px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <p className={`${styles.paragraph}`}>
          Image: Tri-Brigade Shuraig The Ominous Omen
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white'>
          welcome <br />
          to my <br />
          <span className='project-gradient'>
            WEB-ENG PROJECT
          </span>
          .
        </h1>
      </div>
    </div>
    
  </section>
);


export default Hero;