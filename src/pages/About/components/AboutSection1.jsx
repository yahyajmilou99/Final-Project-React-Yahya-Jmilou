import React from 'react';
import './about.sass'

export const AboutSection = () => {
    return (
        <>
            <div className="lg:h-[11vh] h-[0]"></div>
            <div className="aboutContainer">
                
                <div className={`about h-[45vh] w-[100%] bg-red-900 flex items-center justify-center text-center `}>
                    <p className='lg:text-[90px] text-[45px] text-white font-bold ' >ABOUT</p>
                </div>

                <div className="aboutBottom  flex lg:flex-row flex-col lg:justify-between lg:p-[50px] p-[12px] pt-[90px] pb-[100px] lg:gap-[0] gap-[50px] ">
                    <div className="btm lg:w-[31%] w-[100%]  h-[80vh] overflow-hidden ">
                        <div className="bottomLeft lg:scale-[0.9] scale-[0.9]  ">
                        </div>
                    </div>
                    <div className="bottomRight flex flex-col lg:w-[69%] w-[100%] lg:pl-[30px] pl-[0px] gap-4">
                        <h3 className='lg:text-[40px] text-[23px]   '>Our Story</h3>
                        <p className='lg:text-[21px] text-[16px] text-[#a1a1a1] font-light'>In the heart of bustling city streets, where creativity dances with the rhythm of life, there emerged a brand like no other – a beacon of style and innovation in the world of fashion. From the vibrant alleys of inspiration to the meticulous craftsmanship of our ateliers, every stitch tells a tale of passion and dedication.
                            Our journey began with a vision to redefine elegance, to weave threads of tradition with the contemporary flair of modernity. Each garment, a canvas for self-expression, reflects the essence of our brand – a celebration of individuality and confidence.
                            Guided by a commitment to sustainability, we tread lightly upon the earth, sourcing materials with care an  we tread lightly upon the earth, sourcing materials with care an we tread lightly upon the earth, sourcing materials with care an we tread lightly upon the earth, sourcing materials with care an
                        </p>
                        <div className="steveJobs  border-l-[4px] pl-[40px] pt-[20px] pb-[20px] ml-2 mt-[20px] flex flex-col gap-8 ">
                            <p className='lg:text-[21px] text-[16px] text-[#a1a1a1]'>In the heart of bustling city streets, where creativity dances with the rhythm of life, there emerged a brand like no other – a beacon of style and innovation in the world of fashion. From the vibrant alleys of inspiration to From the vibrant alleys of inspiration to
                            </p>
                            <h5 className='lg:text-[17px] text-[14px] text-[#828181]'>- Steve Job's</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

