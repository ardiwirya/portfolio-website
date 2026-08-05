'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <section className='lg:py-16' id='cv'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 '>
                            Hello, I&apos;m{" "}
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                'Ardi Wirya',
                                2000,
                                'a Front-End Dev',
                                1500,
                                'a Fresh Graduate',
                                1500,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Front-End Developer | Fresh Graduate in Informatics Engineering, Malikussaleh University.
                    </p>
                    <div>
                        <a href='/CV_Ardi_Wirya_Indarto.pdf' download target="_blank" rel="noopener noreferrer">
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-slate-500 to-secondary-300 hover:bg-slate-800 text-white mt-3'>
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                            </button>
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }}  
                    className='col-span-4 place-self-center mt-12 lg:mt-0'
                >
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative'>
                        {isLoading && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60">
                                <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin" />
                            </div>
                        )}
                        <Image
                        src="/images/hero.png"
                        alt="hero image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                        onLoad={() => setIsLoading(false)}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection