import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'
import "../app/globals.css"
import Image from 'next/image'
const webdev = () => {
    return (
        <div>
            <Navbar />
            <header className="section-header mt-28 text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">Web Development</h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </header>
            <section className='flex items-center justify-center  content-center text-center'>
                <div>
                    <Image className='flex items-center  content-center text-center' src="/ui.png" width={500} height={500} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default webdev
