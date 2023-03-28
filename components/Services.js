import React from "react";
import Image from "next/image";
import AboutUs from "../src/pages/aboutus";
const Services = () => {

    return (

        <section id="service" className="service" >

            <header className="section-header text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">Services We Provides</h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </header>

            <div className="container px-24 py-24  mx-auto">
                <div className="flex flex-wrap -m-4 p-4 mb-4">
                    <div className="col xl:w-1/3 md:w-1/2 ">
                        <div className="box" >
                            <Image src="/blockk.png" height={800} width={800} alt=""></Image>
                            <div className="tb p-10">
                                <h3 className="flex text-center justify-center">Blockchain Development</h3>
                                <p className="pb-10">Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col xl:w-1/3 md:w-1/2 ">
                        <div className="box" >
                            <Image src="/ui.png" height={800} width={800} alt=""></Image>
                            <div className="tb p-10">
                                <h3 className="flex text-center justify-center">UI/UX Designing</h3>
                                <p className="pb-10">Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col xl:w-1/3 md:w-1/2 ">
                        <div className="box" >
                            <Image src="/magento.png" height={800} width={800} alt=""></Image>
                            <div className="tb p-10">
                                <h3 className="flex text-center justify-center">Magento/Shopify</h3>
                                <p className="pb-10">Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 p-4 mb-2">
                    <div className="col xl:w-1/3 md:w-1/2">
                        <div className="box" >
                            <Image src="/shopy.png" height={800} width={800} alt=""></Image>
                            <div className="tb p-10">
                                <h3 className="flex text-center justify-center">Shopify Development</h3>
                                <p className="pb-10">Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col xl:w-1/3 md:w-1/2 ">
                        <div className="box" >
                            <Image src="/woo.png" height={800} width={800} alt=""></Image>
                            <div className="tb p-10">
                                <h3 className="flex text-center justify-center">Woo Commerce Development</h3>
                                <p className="pb-10">Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Services;