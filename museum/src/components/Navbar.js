import React from 'react'
import Link from "next/link"

function Navbar(){
    return (
    <ul>
        <li> 
            <Link href="/home">Home</Link>
        </li> 
        <li> 
            <Link href="/about">About</Link>
        
        </li>
        <li> 
            <Link href="/gallery">Gallery</Link>
        </li>
    </ul>
    );
}

export default Navbar; 