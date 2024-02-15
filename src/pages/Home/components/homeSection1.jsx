import './section1.sass'
import { Carousel } from 'flowbite-react';
export const FirstSection = () => {
    return (
        <>
            <div className="lg:h-[11vh] h-[0] "></div>
            <div className=" lg:h-[94vh] h-[80vh] w-[100%]">
                <Carousel slideInterval={5000000} className=''>
                    <div className="slide1 bg-green-500 h-[100%] w-[100%] flex items-center lg:justify-center flex-col lg:gap-[30px]  lg:py-[0] py-[70px] justify-between text-center gap-[10px] text-white " >
                        <p className='lg:text-[27px] text-[20px] '>Women Collection 2024</p>
                        <h1 className='lg:text-[70px]  text-[38px] font-extrabold'>NEW ARRIVALS</h1>
                        <button className='lg:w-[200px] w-[160px]  lg:h-[60px] h-[40px] lg:text-[20px] text-[15px] bg-white rounded-full text-black'>SHOP NOW</button>
                    </div>
                    <div className="slide2 bg-green-500 h-[100%] w-[100%] flex items-center lg:justify-center flex-col lg:gap-[30px]  lg:py-[0] py-[70px] justify-between text-center gap-[10px] text-white " >
                        <p className='lg:text-[27px] text-[20px] '>Women Collection 2024</p>
                        <h1 className='lg:text-[70px]  text-[38px] font-extrabold'>NEW ARRIVALS</h1>
                        <button className='lg:w-[200px] w-[160px]  lg:h-[60px] h-[40px] lg:text-[20px] text-[15px] bg-white rounded-full text-black'>SHOP NOW</button>
                    </div>
                    <div className="slide3 bg-green-500 h-[100%] w-[100%] flex items-center lg:justify-center flex-col lg:gap-[30px]  lg:py-[0] py-[70px] justify-between text-center gap-[10px] text-white " >
                        <p className='lg:text-[27px] text-[20px] '>Women Collection 2024</p>
                        <h1 className='lg:text-[70px]  text-[38px] font-extrabold'>NEW ARRIVALS</h1>
                        <button className='lg:w-[200px] w-[160px]  lg:h-[60px] h-[40px] lg:text-[20px] text-[15px] bg-white rounded-full text-black'>SHOP NOW</button>
                    </div>
                </Carousel>
            </div>

            <div className="section2 lg:py-[50px] py-[30px] lg:px-[60px] px-[10px] lg:h-[163vh] h-[489vh] flex justify-between lg:flex-row flex-col lg:gap-0 gap-[40px] ">

                <div className="sec2Left lg:w-[calc(95%/3)] w-[100%] h-[calc(100%/3)] lg:h-[100%]  flex flex-col lg:justify-between  lg:gap-0 gap-[40px]  ">
                    <div className="sec2LeftTop h-[58%]   w-[100%] relative  overflow-hidden ">
                        <button className='flex items-center justify-center absolute bottom-7 left-[50%] m-auto z-10 -translate-x-[50%] lg:w-[220px] w-[140px] lg:h-[68px] h-[40px] lg:text-[20px] font-extralight bg-white  '>DRESSES</button>
                        <div className="img1 w-[100%] h-[100%] "></div>
                    </div>
                    <div className="sec2LeftBottom h-[38%]  w-[100%]  relative overflow-hidden ">
                        <button className='flex items-center justify-center absolute bottom-7 left-[50%] m-auto z-10 -translate-x-[50%] lg:w-[220px] w-[140px] lg:h-[68px] h-[40px] lg:text-[20px] font-extralight bg-white  '>SUNGLASSES</button>
                        <div className="img2 w-[100%] h-[100%] "></div>
                    </div>
                </div>

                <div className="sec2center lg:w-[calc(95%/3)] w-[100%] h-[calc(100%/3)] lg:h-[100%]  flex flex-col lg:justify-between  lg:gap-0 gap-[40px]">
                    <div className="sec2centerTop sec2LeftTop h-[38%]  lg:w-[100%] w-[100%] relative  overflow-hidden ">
                        <button className='items-center justify-center absolute bottom-7 left-[50%] m-auto z-10 -translate-x-[50%] lg:w-[220px] w-[140px] lg:h-[68px] h-[40px] lg:text-[20px] font-extralight bg-white  '>WATCHES</button>
                        <div className="img3 w-[100%] h-[100%] "></div>
                    </div>
                    <div className="sec2centerBottom h-[58%] lg:w-[100%] w-[100%]  relative overflow-hidden">
                        <button className='items-center justify-center absolute bottom-7 left-[50%] m-auto z-10 -translate-x-[50%] lg:w-[220px] w-[140px] lg:h-[68px] h-[40px] lg:text-[20px] font-extralight bg-white  '>FOOTERWEARES</button>
                        <div className="img4 w-[100%] h-[100%] "></div>
                    </div>
                </div>

                <div className="sec2right lg:w-[calc(95%/3)] w-[100%] h-[calc(100%/3)] lg:h-[100%] flex flex-col lg:justify-between  lg:gap-0 gap-[40px] ">
                    <div className="sec2rightTop sec2LeftTop h-[58%]  lg:w-[100%] w-[100%] relative  overflow-hidden ">
                        <button className='items-center justify-center absolute bottom-7 left-[50%] m-auto z-10 -translate-x-[50%] lg:w-[220px] w-[140px] lg:h-[68px] h-[40px] lg:text-[20px] font-extralight bg-white  '>BAGS</button>
                        <div className="img5 w-[100%] h-[100%] "></div>
                    </div>
                    <div className="sec2rightBottom h-[38%] lg:w-[100%] w-[100%]  relative overflow-hidden">
                        <button className='items-center justify-center absolute bottom-7 left-[50%] m-auto z-10 -translate-x-[50%] lg:w-[220px] w-[140px] lg:h-[68px] h-[40px] lg:text-[20px] font-extralight bg-white  '>ACCESSORIES</button>
                        <div className="img6 w-[100%] h-[100%] "></div>
                    </div>
                </div>
            </div>
        </>
    );
}
