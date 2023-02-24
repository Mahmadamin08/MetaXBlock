import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
const HomePage = () => {
    return (
        <div className="home ">
            <Navbar />
            <div className="row">
                <div className="col1">
                    <h1 className="slog">Transform Your Ideas into Stunning Products with Us</h1>
                    <p className="par">Empowering your business with technology</p>
                    <button className="btn explore">Explore Our Services</button>
                </div>
                <div className="col2">
                    <Image src="/hhhh.svg" width={700} height={700}></Image>
                </div>
            </div>
        </div>
    )
}

export default HomePage; 