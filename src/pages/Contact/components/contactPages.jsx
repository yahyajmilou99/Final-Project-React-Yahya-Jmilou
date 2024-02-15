import React from 'react';
import './contact.sass'


export const ContactPages = () => {
    return (
        <>
            <div className="lg:h-[11vh] h-[0]"></div>
            <div className={`contact lg:h-[45vh] h-[52vh] w-[100%]  bg-red-900 flex items-center justify-center text-center `}>
                <p className='lg:text-[70px] text-[38px] text-white font-bold ' >CONTACT</p>
            </div>
            <div className="contactContainer   flex lg:p-[50px] p-[10px] lg:py-[80px] py-[60px] lg:flex-row flex-col justify-between lg:gap-[0] gap-[40px] ">
                <iframe className='w-[100%] lg:w-[42%] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.741154581243!2d-7.535566149999999!3d33.6004966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd000322beaf%3A0x7690837bac76572b!2sCentre%20de%20langue%20et%20soutien%20scolaire!5e0!3m2!1sfr!2sma!4v1707922679058!5m2!1sfr!2sma" width="600" height="630" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="lg:w-[52%] w-[100%] flex flex-col pt-4 gap-[1.5rem]">
                    <form className='w-[100%] flex flex-col gap-6'>
                        <h1 className='lg:text-[40px] text-[25px] '>Send us your message</h1>
                        <input type="text" placeholder='Name' className='p-4 w-[95%]  lg:w-[100%] border-[#d2cdcd] h-[63px] ' />
                        <input type="text" placeholder='Email' className='p-4 w-[95%] lg:w-[100%] border-[#d2cdcd] h-[63px] ' />
                        <input type="text" placeholder='Phone' className='p-4 w-[95%] lg:w-[100%] border-[#d2cdcd] h-[63px] ' />
                        <textarea placeholder='Message' name="" id="" cols="30" rows="5" className='w-[100%] p-4 border-[#d2cdcd]'></textarea>
                    </form>
                    <button className='bg-black text-white lg:w-[25%] w-[50%] lg:h-[55px] h-[55px] rounded-[28px] text-[24px] '>Send</button>
                </div>
            </div>
        </>
    );
};

