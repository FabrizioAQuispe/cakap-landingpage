'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menus = [
        { id: 1, enlace: 'Adult Course' },
        { id: 2, enlace: 'Kids Course' },
        { id: 3, enlace: 'Corporate Class' },
        { id: 4, enlace: 'Package' },
        { id: 5, enlace: 'Blog' },
    ];

    // Toggles the menu open or closed
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex flex-wrap justify-between items-center p-4'>
            {/* Logo Section */}
            <div className='bg-home-page bg-contain bg-no-repeat cursor-pointer bg-center w-[200px] h-[100px] md:w-[150px] md:h-[80px]'></div>

            {/* Hamburger Icon */}
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Show hamburger or close icon based on the state */}
                </button>
            </div>

            {/* Menu and Button Section */}
            <ul className={`w-full flex-col md:flex space-y-4 md:space-y-0 md:space-x-4 p-4 items-center
                ${isOpen ? 'flex' : 'hidden'} md:flex`}> {/* Toggle visibility based on state */}
                {menus.map((enlace) => (
                    <li key={enlace.id}>
                        <Link href='#' className='text-lg md:text-xl'>{enlace.enlace}</Link>
                    </li>
                ))}
                <button className='bg-slate-800 text-white p-2 md:p-4 rounded-md w-full md:w-[150px]'>
                    Contact Us
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
