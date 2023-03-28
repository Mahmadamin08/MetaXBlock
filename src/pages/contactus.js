import Footer from 'components/Footer'
import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Navbar from '../../components/Navbar'
import '../app/globals.css'

const ContactUs = () => {
  return (
    <div className="">
      <Navbar />
      <section className="text-gray-600 mt-28 body-font relative px-28">
        <header className="section-header text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-4">Contact Us</h1>
          <div className="flex mt-4 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </header>

        <div className="container px-2 py-16 mx-auto   flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 border-2 p-10 rounded-lg overflow-hidden sm:mr-10  flex flex-col">
            <h1 className="text-5xl block text-center">Lets get in Touch!!</h1>
            <Image src="hey.svg" className='text-sm h-80 mt-20' height={520} width={520} alt="img" />
          </div>
          <div className="lg:w-1/2 md:w-1/2 border-2 rounded-2xl p-10 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form action="">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="Number" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">Email Address</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-gray-600">Interested in</label>
                    <select required="required" id="Subject" name="userSubject" className="floating-select border-2 py-2">
                      <option value="">&nbsp;</option>
                      <option value="Blockchain Development" >Blockchain Development</option>
                      <option value="Token Development" >Token Development</option>
                      <option value="Auditing Services" >Auditing Services</option>
                      <option value="Crypto Exchange Development" >Crypto Exchange Development</option>
                      <option value="Crypto Payment Gateway" >Crypto Payment Gateway</option>
                      <option value="Metaverse Development" >Metaverse Development</option>
                      <option value="NFT Marketplace Development" >NFT Marketplace Development</option>
                      <option value="Launchpad Platform Development" >Launchpad Platform Development</option>
                      <option value="Other" >Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -m-2">
                <div className="p-2">
                  <label for="email" className="leading-7 text-sm text-gray-600">Brief About your Project!!</label>
                  <textarea type="text" id="name" name="name" className="w-full bg-gray-100  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <button className='w-full bg-slate-300 rounded-3xl p-4 text-2xl mt-8 '>Submit</button>

              <div className="box border-2 rounded-xl mt-4 p-4">
                <h1 className='block'><BsFillTelephoneFill style={{ display: "inline-block", "fontSize": '25px' }} /> <span className='text-2xl ml-4'> Phone:</span></h1>
                <h2 className='ml-12'>+91 9999999999</h2>
                <h1 className='block'><MdEmail style={{ display: "inline-block", "fontSize": '25px' }} /> <span className='text-2xl ml-4'> Email:</span></h1>
                <h2 className='ml-12'>msdhoni@gmail.com</h2>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContactUs
