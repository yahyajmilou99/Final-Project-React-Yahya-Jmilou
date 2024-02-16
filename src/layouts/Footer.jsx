import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestSquare } from "react-icons/fa";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa6";
import './footer.sass'


export const Footer = () => {
    return (
        <>
            <div className="footerContainer lg:py-[80px] py-[60px] lg:px-[30px] px-[10px] items-center bg-[#f0f0f0] flex flex-col lg:w-[fit-content] w-[100%]   ">
                <div className="flex justify-between lg:flex-row flex-col lg:gap-[] gap-[40px] ">

                    <div className="footerleft lg:w-[28%] w-[100%] flex flex-col gap-[45px]   ">
                        <h5 className='lg:text-[20px] text-[16px] font-bold text-[#222222] '>GET IN TOUCH</h5>
                        <p className='text-[#6c6f89]'>
                            Any questions? Let us know in store at 8th floor, 379
                            Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className="footerIcons lg:text-[25px] text-[20px]  flex  lg:gap-6 gap-3 text-[#6c6f89]">
                            <FaFacebookF /><FaTwitter /><FaPinterestSquare /><FaGooglePlusG /><FaInstagram />
                        </div>
                    </div>

                    <div className="footerCenter text-nowrap flex lg:w-[34%] w-[100%] lg:justify-between lg:flex-row flex-col lg:gap-[20px] gap-12 ">
                        <div className="categories flex flex-col lg:gap-7 gap-7">
                            <h6 className='lg:text-[20px] text-[16] font-bold text-[#222222] '>CATEGORIES</h6>
                            <div className="links flex flex-col gap-5 lg:text-[17px] text-[14px] text-[#6c6f89]">
                                <p>Men</p>
                                <p>Women</p>
                                <p>Dresses</p>
                                <p>Sunglasses</p>
                            </div>
                        </div>
                        <div className="categories flex flex-col gap-7">
                            <h6 className='lg:text-[20px] text-[16] font-bold text-[#222222] '>LINKS</h6>
                            <div className="links flex flex-col gap-5 lg:text-[17px] text-[14px]  text-[#6c6f89]">
                                <p>Search</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Returns</p>
                            </div>
                        </div>
                        <div className="categories flex flex-col gap-7">
                            <h6 className='lg:text-[20px] text-[16] font-bold text-[#222222] '>HELP</h6>
                            <div className="links flex flex-col gap-5 lg:text-[17px] text-[14px] text-[#6c6f89] ">
                                <p>Track Order</p>
                                <p>Returns</p>
                                <p>Shipping</p>
                                <p>FAQs</p>
                            </div>
                        </div>
                    </div>

                    <div className="footerRight flex flex-col gap-7 lg:gap-7 w-[100%] lg:w-[30%] lg:pl-[35px] pl-[px]">
                        <h5 className='lg:text-[20px] text-[16] font-bold text-[#222222] '> NEWSLETTER</h5>
                        <input type="text" className=' lg:w-[180px] w-[100%]   border-0 bg-transparent border-b-[0.5px] border-b-[green] ' />
                        <button className='lg:h-[60px] h-[45px] lg:w-[200px] w-[160px] bg-black rounded-full text-white  '>SUBSCRIBE</button>
                    </div>
                </div>
                <p className=' lg:mt-[130px] mt-[90px] lg:block flex text-[#6c6f89] lg:items-start items-center lg:flex-row flex-col text-center  lg:text-[16px] text-[9px] '>Copyright © 2022 <span className='lg:text-[22px] text-[12px] '>Shopify Theme Developed by MassTechnologist</span> All rights reserved.</p>
            </div>
        </>
    );
};

