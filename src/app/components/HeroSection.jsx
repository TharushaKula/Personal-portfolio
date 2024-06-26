"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))">
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500'>Hello , I am {" "}</span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Tharusha',
                            1000, 
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'Software Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1> 
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima quam ex laboriosam voluptates sit et, incidunt libero, cum aliquid corrupti magnam quas dicta consequatur quo? Quaerat sint autem fugit.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    <button
                        className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-slate-800 mt-3'
                        onClick={() => handleDownloadCV()}
                    >
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                        Download CV
                        </span>
                    </button>
                </div>

            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                    src='/images/me.jpg'
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                    width={200}
                    height={200}
                />

                </div>
            </div>
        </div>
    </section>
  )
}

const handleDownloadCV = () => {
    // Replace 'your_cv_filename.pdf' with the actual filename of your CV
    const cvUrl = '/pdfs/Tharusha_Kulasinghe_CV.pdf';
    
    // Create a temporary anchor element
    const anchorElement = document.createElement('a');
    anchorElement.href = cvUrl;
    anchorElement.download = 'Tharusha_Kulasinghe_CV.pdf';
    
    // Append the anchor element to the document body
    document.body.appendChild(anchorElement);
    
    // Programmatically trigger a click event on the anchor element
    anchorElement.click();
    
    // Remove the anchor element from the document body
    document.body.removeChild(anchorElement);
  };
  

export default HeroSection