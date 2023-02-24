import React from "react";
import Image from "next/image";
const Services = () => {

    return (

        <section id="service" className="service">

            <header className="section-header text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">Services We Provides</h1>
                <div className="flex mt-4 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </header>
            <div className="row">
                <div className="col-lg-4">
                    <div className="box" >
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box" >
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box" >
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box" >
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box" >
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box" >
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>Lorem ipsum dolor sit amet conseim est esse dignissimos commodi quo vitae nostrum facere.</p>
                        </div>
                    </div>
                </div>

                {/* <div className="col-lg-4">
                    <div className="box">
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>We'll cover it all! From researchihbjhvjvjvhjvhjng content ideas to publishing the videos and everything in between</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box">
                        <Image src="/home.png" height={800} width={800}></Image>
                        <div className="tb">
                            <h3>Blockchain Dev</h3>
                            <p>We'll cover it all! From researchihbjhvjvjvhjvhjng content ideas to publishing the videos and everything in between</p>
                        </div>
                     </div>
                </div> */}
            </div>



        </section>



    )
}
export default Services;