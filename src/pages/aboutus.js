import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Image from 'next/image'
import React from 'react'
import '../app/globals.css'
const AboutUs = () => {
    return (
        <div className="">
            <Navbar />
            <header className="section-header mt-28 text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">About Us</h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </header>
            <section className="text-gray-600 px-28  body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center px-8">
                                <h2 className="text-gray-900 font-semibold  text-4xl">A Decade Long Digital Experience</h2>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <p className="leading-relaxed">Since the establishment in 2023, our resolute team of WebIndians has been continuously setting new milestones of customer satisfaction.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center px-8">
                                <h2 className="text-gray-900 font-semibold  text-4xl">Respected And Loved by All</h2>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <p className="leading-relaxed">We are respected and loved by our employees, and so their passion and dedication have made us successful in receiving the same treatment from our clients.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center px-8">
                                <h2 className="text-gray-900 font-semibold  text-4xl"> What Do We Do for you?</h2>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <p className="leading-relaxed">We love to learn and understand our clients’ requirement and offer a solution with our experience, expertise, and vision.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font px-28">
                <div className="container  px-5 py-24 mx-auto ">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Advantages of Working With Us</h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                        <div className="px-10 mb-8 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 p-3 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <Image src="/quality.png" height={400} width={400} alt=""></Image>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-black text-2xl title-font font-medium mb-3">Quality</h2>
                                <p className="leading-relaxed text-base">We are keen on providing high quality at every stage or project development. We never compromise with quality.</p>

                            </div>
                        </div>
                        <div className="px-10 mb-8  md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 p-3 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <Image src="/donation.png" height={400} width={400} alt=""></Image>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Affordability</h2>
                                <p className="leading-relaxed text-base">Get our excellent quality services at an affordable price. We give value for your money. You can rely on us for the high-end service at the best price.</p>

                            </div>
                        </div>
                        <div className="px-10 mb-8  md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 p-3 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <Image src="/time.png" height={400} width={400} alt=""></Image>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">On-Time Delivery</h2>
                                <p className="leading-relaxed text-base">We never break our commitment. Our team delivers your project on time without any error.</p>
                            </div>
                        </div>

                        <div className="px-10 my-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 p-4 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <Image src="/transparency.png" height={400} width={400} alt=""></Image>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Transparency</h2>
                                <p className="leading-relaxed text-base">We follow a transparent working system which includes interactive work reports at every stage of progress. We give you detailed updates about the project during the development process.</p>
                            </div>
                        </div>
                        <div className="px-10 my-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 p-5 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <Image src="/development.png" height={400} width={400} alt=""></Image>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Steady growth</h2>
                                <p className="leading-relaxed text-base">By In-depth understanding of your business niche, incorporated with our digital skills, we ensure the steady growth of your business.</p>

                            </div>
                        </div>
                        <div className="px-10 my-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 p-3 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <Image src="/hand-shake.png" height={400} width={400} alt=""></Image>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Promises</h2>
                                <p className="leading-relaxed text-base">We cater to your requirement in the best possible way. We deliver as per our promises and give you end to end solution.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUs
