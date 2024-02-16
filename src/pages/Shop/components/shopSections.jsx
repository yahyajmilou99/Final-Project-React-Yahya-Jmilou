import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import './shopSections.sass'
import { motion } from "framer-motion"
import { FaSearch } from "react-icons/fa";

export const ShopSections = () => {

    const [productDataBase, setProductDatabase] = useContext(MyContext)


    // ~ Search

    const [search, setSearch] = useState(``)

    return (
        <>
            <div className="lg:h-[16vh] h-[0]"></div>
            <div className={`prods h-[45vh] w-[100%] bg-red-900 flex items-center justify-center text-center `}>
                <p className='lg:text-[60px] text-[45px] text-white font-bold ' >PRODUCTS</p>
            </div>
            <div className="prodsNav flex lg:p-[30px] lg:flex-row flex-col p-[40px] ">
                <div className="search lg:w-[25%] flex justify-center  p-[10px] h-[10%] items-center gap-[10px] text-[20px] text-[#a1a1a1] ">
                    <input onChange={(e) => (setSearch(e.target.value))} type="text" className='lg:w-[240px] w-[80%] lg:h-[40px] h-[60px] border-[#a1a1a1] p-[10px]  ' placeholder='Search ....' />
                    <FaSearch />
                </div>
                <div className="prodsContainer lg:w-[70%] w-[100%]  lg:p-[20px] flex lg:flex-wrap lg:flex-row flex-col justify-between lg:gap-6 gap-[60px] ">
                    {
                        productDataBase.filter((e) =>{
                            return search.toLowerCase() === `` ? e : e.name.toLowerCase().includes(search)
                        }).map((element) => (
                            <div className="shopProd lg:w-[calc(90%/3)]">
                                <div className='h-[60vh] w-[100%]  ' >
                                    <div style={{ backgroundImage: ` url(${element.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                                        className="prodImp  h-[90%] w-[100%] relative  ">
                                        <motion.div
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: `0.3`,
                                                duration: `0.5`
                                            }}
                                            className=' btnn bg-gray-800 cursor-pointer h-[40px] absolute bottom-3  left-[25%] -translate-x-[50%]  w-[140px]  rounded-[30px] text-[white] text-[14px] opacity-0 flex items-center justify-center'>ADD TO CART</motion.div>
                                    </div>
                                </div>
                                <div className="p-[10px] text-[20px] text-[#a1a1a1]">
                                    <p>{element.name}</p>
                                    <p>{element.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

