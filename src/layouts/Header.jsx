import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate()
    return (
        <>
            <Navbar fluid rounded className='navNav rounded-[0] lg:fixed w-[100vw]  lg:p-[17px] z-50 shadow-lg ' >
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-[40px] font-semibold dark:text-white">SportX</span>
                </Navbar.Brand>
                <div className="flex md:order-2 p-3">
                    <Navbar.Toggle className=' ' />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className='text-[20px] text-[#333333] lg:ml-[50px] cursor-pointer '  onClick={() => navigate(`/`) }>Home</Navbar.Link>
                    <Navbar.Link className='text-[20px] text-[#333333] lg:ml-[50px] cursor-pointer  ' onClick={() => navigate(``) }>Shop</Navbar.Link>
                    <Navbar.Link className='text-[20px] text-[#333333] lg:ml-[50px] cursor-pointer  ' onClick={() => navigate(`/About`) }>About</Navbar.Link>
                    <Navbar.Link className='text-[20px] text-[#333333] lg:ml-[50px] cursor-pointer  ' onClick={() => navigate(`/Contact`) }>Contact</Navbar.Link>
                </Navbar.Collapse>
                <div className="profil h-[50px] w-[50px] bg-gray-700  rounded-full "></div>
            </Navbar>
        </>
    );
};
