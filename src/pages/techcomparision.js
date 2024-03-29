import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Image from 'next/image'
import React from 'react'
import '../app/globals.css'
const techcomparision = () => {
    return (
        <div>
            <Navbar />
            <header className="section-header mt-28 text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">Technology Comparisons</h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </header>
            <section className=" mx-24 text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <a className="inline-flex items-center">
                                <Image alt="blog" src="/dummy.png" height={104} width={104} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">React Native vs Swift – A Side-by-Side Comparison for iOS Application Development</h2>
                            <p className="leading-relaxed mb-8">React Native vs Swift has been a topic of confusion among many iOS developers. This article will explain exactly what difference React Native & Swift makes when it comes to iOS application development.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <a className="inline-flex items-center">
                                <Image alt="blog" src="/dummy.png" height={104} width={104} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Angular vs Vue: Which Framework to Choose in 2023?</h2>
                            <p className="leading-relaxed mb-8">Starting from jQuery, a Javascript library released in 2006 for building interactive web apps, Javascript frameworks have evolved very quickly over the past few years. And ever since, there has been a trend for developing organized frontend frameworks. This evolution made it possible to meet the concept of Single-Page Applications (SPA) - web apps that dynamically rewrite the web pages without loading entire new pages.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <a className="inline-flex items-center">
                                <Image alt="blog" src="/dummy.png" height={104} width={104} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">React Native vs Swift – A Side-by-Side Comparison for iOS Application Development</h2>
                            <p className="leading-relaxed mb-8">React Native vs Swift has been a topic of confusion among many iOS developers. This article will explain exactly what difference React Native & Swift makes when it comes to iOS application development.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <a className="inline-flex items-center">
                                <Image alt="blog" src="/dummy.png" height={104} width={104} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </a>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Angular vs Vue: Which Framework to Choose in 2023?</h2>
                            <p className="leading-relaxed mb-8">Starting from jQuery, a Javascript library released in 2006 for building interactive web apps, Javascript frameworks have evolved very quickly over the past few years. And ever since, there has been a trend for developing organized frontend frameworks. This evolution made it possible to meet the concept of Single-Page Applications (SPA) - web apps that dynamically rewrite the web pages without loading entire new pages.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default techcomparision
