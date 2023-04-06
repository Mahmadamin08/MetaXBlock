"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropRightLine } from 'react-icons/ri'

const Navbar = () => {

    const [navbar, setNavBack] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY >= 80) { setNavBack(true); console.log(55); }
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
        <nav className={navbar ? 'navbar act sticky flex justify-between container mx-auto lg:px-24 t-0 h-4 flex-wrap p-5 flex-col md:flex-row items-center' : 'navbar sticky flex justify-between container mx-auto lg:px-24 t-0 h-4 flex-wrap p-5 flex-col md:flex-row items-center'} >
            <Link href="/"> <h1 className="logo"><span>MetaX</span>Block</h1></Link>
            <ul className="nav-links md:ml-auto flex flex-wrap items-center text-base justify-center text-blue-900">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/aboutus">About Us</Link></li>
                <li><Link href="/">Services<RiArrowDropDownLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                    <ul className="submenu">
                        <li><Link href="/blockchain" >Blockchain Development<RiArrowDropRightLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                            <ul className="submenu1">
                                <li><Link href="#">Token Development</Link></li>
                                <li><Link href="#">Crypto Exchange Development</Link></li>
                                <li><Link href="#">Crypto Payment Gateway</Link></li>
                                <li><Link href="#">Metaverse Development</Link></li>
                                <li><Link href="#">NFT Marketplace Development</Link></li>
                                <li><Link href="#">ICO/IDO/IEO</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/webdev" >Web Development<RiArrowDropRightLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                            <ul className="submenu1">
                                <li><Link href="#">Mean Stack Development</Link></li>
                                <li><Link href="#">AngularJs Development</Link></li>
                                <li><Link href="#">NodeJs Development</Link></li>
                                <li><Link href="#">PHP Development</Link></li>
                                <li><Link href="#">Laravel Development</Link></li>
                                <li><Link href="#">HTML5 Development</Link></li>
                                <li><Link href="#">ReactJs Development</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/mobiledev" >Mobile Development<RiArrowDropRightLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                            <ul className="submenu1">
                                <li><Link href="#">Android Development</Link></li>
                                <li><Link href="#">IOS Development</Link></li>
                                <li><Link href="#">React Native Development</Link></li>
                            </ul>
                        </li>
                        <li><Link href="uiux">UI/UX Designing</Link></li>
                        <li><Link href="magento">Magento/Shopify Development</Link></li>
                        <li><Link href="aiml" >AI/ML<RiArrowDropRightLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
                            <ul className="submenu1">
                                <li><Link href="#">Bot Development</Link></li>
                                <li><Link href="#">Analytics</Link></li>
                                <li><Link href="#">Artificial Intelligence</Link></li>
                                <li><Link href="#">Product Engineering</Link></li>
                                <li><Link href="#">Software Development</Link></li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <li><Link href="/techcomparision">Technology Comparisons</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contactus" className="btn">Contact Us</Link></li>
            </ul>
        </nav>

        // <div className="container mx-auto flex lg:px-24 t-0 h-4 flex-wrap p-5 flex-col md:flex-row items-center">
        //     <h1 className="flex logo title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //         <span >MetaX</span>Block
        //     </h1>
        //     {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"> */}
        //     <ul className="nav-links md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-500">
        //         <li><Link href="">Home</Link></li>
        //         <li><Link href="/">About Us</Link></li>
        //         <li><Link href="/">Services<RiArrowDropDownLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
        //             <ul className="submenu">
        //                 <li><Link href="#" >Blockchain Development<RiArrowDropRightLine style={{ display: "inline-block", "fontSize": '25px' }} /></Link>
        //                     <ul className="submenu1">
        //                         <li><Link href="#">Token Development</Link></li>
        //                         <li><Link href="#">Crypto Exchange Development</Link></li>
        //                         <li><Link href="#">Crypto Payment Gateway</Link></li>
        //                         <li><Link href="#">Metaverse Development</Link></li>
        //                         <li><Link href="#">NFT Marketplace Development</Link></li>
        //                         <li><Link href="#">ICO</Link></li>
        //                         <li><Link href="#">IDO</Link></li>
        //                         <li><Link href="#">ETC</Link></li>
        //                     </ul>
        //                 </li>
        //                 <li><Link href="#">UI/UX Designing</Link></li>
        //                 <li><Link href="#">Magento Development</Link></li>
        //                 <li><Link href="#">Shopify Development</Link></li>
        //                 <li><Link href="#">Woo Commerce Development</Link></li>
        //             </ul>
        //         </li>
        //         <li><Link href="/">Technology Comparisons</Link></li>
        //         <li><Link href="/">Blog</Link></li>
        //     </ul>
        //     {/* </nav> */}
        //     <button className=" btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact Us
        //     </button>
        // </div>
        // </div>
    )
}

export default Navbar;