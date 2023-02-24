"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropRightLine } from 'react-icons/ri'

const Navbar = () => {

    const [navbar, setNavBack] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY >= 80) { setNavBack(true); console.log(55);}
        else { setNavBack(false); }
        
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    // return () => {
    //     window.removeEventListener("scroll", changeNavbar);
    // }

    return (
        // <div className={navbar ? 'navbar active' : 'navbar'}>
        <nav className={navbar ? 'navbar act sticky flex justify-between' : 'navbar sticky flex justify-between'} >
            <h1 className="logo"><span>MetaX</span>Block</h1>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Services<RiArrowDropDownLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                    <ul className="submenu">
                        <li><Link href="#" >Blockchain Development<RiArrowDropRightLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                            <ul className="submenu1">
                                <li><Link href="#">Token Development</Link></li>
                                <li><Link href="#">Crypto Exchange Development</Link></li>
                                <li><Link href="#">Crypto Payment Gateway</Link></li>
                                <li><Link href="#">Metaverse Development</Link></li>
                                <li><Link href="#">NFT Marketplace Development</Link></li>
                                <li><Link href="#">ICO</Link></li>
                                <li><Link href="#">IDO</Link></li>
                                <li><Link href="#">ETC</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">UI/UX Designing</Link></li>
                        <li><Link href="#">Magento Development</Link></li>
                        <li><Link href="#">Shopify Development</Link></li>
                        <li><Link href="#">Woo Commerce Development</Link></li>
                    </ul>
                </li>
                <li><Link href="/">Technology Comparisons</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/" className="btn">Contact Us</Link></li>
            </ul>
        </nav>
        // </div>
    )
}

export default Navbar;