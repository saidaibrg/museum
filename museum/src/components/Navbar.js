import React from 'react'
import Link from "next/link"

function Navbar(){
    return (
    <nav className="fixed w-full h-24 shadow-xl">
    <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
    <ul className='hidden sm:flex'>
        <li className='ml-10 uppercase hover:border-b text-xl'> 
            <Link href="/">Home</Link>
        </li> 
        <li className='ml-10 uppercase hover:border-b text-xl'> 
            <Link href="/about">About</Link>
        
        </li>
        <li className='ml-10 uppercase hover:border-b text-xl'> 
            <Link href="/gallery">Gallery</Link>
        </li>
    </ul>
    </div>
    </nav>
    );
}

export default Navbar; 