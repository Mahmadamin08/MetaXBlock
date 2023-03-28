import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from './page.module.css'
import Navbar from 'components/Navbar'
import HomePage from 'components/HomePage'
import Services from 'components/Services'
import ContactUs from '@/pages/contactus'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navbar/> */}
      <HomePage />
      <Services />
      {/* <ContactUs /> */}
      <Footer />
    </main>
  )
}
