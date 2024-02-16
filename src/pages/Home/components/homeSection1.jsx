import { useContext, useEffect, useState } from 'react';
import './section1.sass'
import { Carousel } from 'flowbite-react';
import { MyContext } from '../../../utils/contextProvider';
export const FirstSection = () => {



    // * SECTION 3 SCRIPT

    const [newPord, setNewProd] = useState(true)
    const [oldPord, setOldProd] = useState(false)
    const [sellPord, setSellProd] = useState(false)

    const [productDataBase, setProductDatabase, product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12] = useContext(MyContext)

    const [randomIdx , setRandomIdx]= useState(Math.floor(Math.random() * productDataBase.length))




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

            <div className="section3 flex flex-col items-center lg:px-[50px] lg:py-[40px] gap-[40px]  ">
                <h1 className='text-[30px] font-bold  text-center' >FEATURED PRODUCTS</h1>
                <div className="sec3Nav flex lg:w-[60%] justify-between text-[28px] font-bold cursor-pointer lg:flex-row flex-col lg:gap-0 gap-[20px]">
                    <div onClick={() => { setNewProd(true); setOldProd(false); setSellProd(false) }} className=' w-[160px] h-[50px] bg-[#e65540] text-[white] rounded-full flex justify-center items-center '><p>New</p></div>
                    <div onClick={() => { setNewProd(false); setOldProd(true); setSellProd(false) }} className=' w-[160px] h-[50px] bg-[#e65540] text-[white] rounded-full flex justify-center items-center '><p>old</p></div>
                    <div onClick={() => { setNewProd(false); setOldProd(false); setSellProd(true) }} className=' w-[160px] h-[50px] bg-[#e65540] text-[white] rounded-full flex justify-center items-center '><p>sell</p></div>
                </div>

                <div className={`cardsContainerNew w-[100%] lg:h-[70vh] h-[370vh] flex lg:gap-0 gap-[20px] lg:flex-row flex-col justify-between ${newPord ? "flex" : "hidden"} `}>
                    <div className="card  lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]    flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg1 h-[82%] lg:w-[100%] w-[100%]  ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>new</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg2  h-[82%] lg:w-[100%] w-[100%] ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>new</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg3 h-[82%] lg:w-[100%] w-[100%] ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>new</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg4  h-[82%] lg:w-[100%] w-[100%]  ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>new</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                </div>

                <div className={`cardsContainerOld w-[100%] lg:h-[70vh] h-[370vh] flex lg:gap-0 gap-[20px] lg:flex-row flex-col justify-between ${oldPord ? "flex" : "hidden"} `}>
                    <div className="card  lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]    flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg5 h-[82%] lg:w-[100%] w-[100%]  ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>old</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg6  h-[82%] lg:w-[100%] w-[100%] ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>old</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg7 h-[82%] lg:w-[100%] w-[100%] ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>old</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg8  h-[82%] lg:w-[100%] w-[100%]  ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>old</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                </div>

                <div className={`cardsContainerSell w-[100%] lg:h-[70vh] h-[370vh] flex lg:gap-0 gap-[20px] lg:flex-row flex-col justify-between ${sellPord ? "flex" : "hidden"} `}>
                    <div className="card  lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]    flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg9 h-[82%] lg:w-[100%] w-[100%]  ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>sell</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg10  h-[82%] lg:w-[100%] w-[100%] ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>sell</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg11 h-[82%] lg:w-[100%] w-[100%] ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>sell</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                    <div className="card   lg:w-[calc(90%/4)] w-[100%] lg:h-[100%] h-[calc(100%/4)]   flex flex-col justify-between  lg:p-[0] p-[10px] ">
                        <div className="cardImg12  h-[82%] lg:w-[100%] w-[100%]  ">
                        </div>
                        <div className="cardDesc">
                            <p className='text-[18px] text-[#888888] '>old</p>
                            <p className='text-[14px] text-[#888888] '>20.00$</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="section4 lg:p-[50px] p-[10px] lg:gap-0 gap-[20px] w-[100%] flex justify-between lg:flex-row flex-col ">
                <div className="sec4left lg:w-[48%] w-[100%] p-[100px] bg-red-800 flex items-center justify-center flex-col gap-[20px] text-center text-nowrap text-white ">
                    <h3 className='text-[30px]'>The Beauty</h3>
                    <h1 className='text-[55px] font-bold  '>LOOKBOOK</h1>
                    <h6 className='text-[26px]'>VIEW COLLECTION</h6>
                </div>
                <div className="sec4right lg:w-[48%] w-[100%] p-[px] flex flex-col items-center gap-[40px] ">
                    <img src={productDataBase[randomIdx].img} alt="" className=' h-[400px] w-[100%] ' />
                    <h1 className='text-[50px] font-bold '>{productDataBase[randomIdx].name}</h1>
                </div>
            </div>
        </>
    );
}
