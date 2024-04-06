import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSkillGarage from "../../../public/assets/logo.svg";
import Linkedin from "../../../public/assets/Icon/linkedin.svg";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className="bg-white-300 p-5 sm:pb-20 md:pb-5 lg:pb-5 xl:pb-5 pb-14">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-1 sm:grid-rows-1 xs:grid-rows-1 grid-flow-row sm:grid-flow-col  grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-1 md:col-span-4 sm:col-span-12 col-start-1 col-end-12 sm:col-start-1 sm:col-end-12 flex flex-col items-start ">
            <LogoSkillGarage className="h-24 w-auto mb-6" />

            <p className="mb-4">
              <strong className="font-medium">Skill Garage</strong> is a private
              virtual network that has unique features and has high security.
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Link href={'#'}>
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Link to={{ pathname: "https://twitter.com/skillgarage?s=21" }} target="_blank" href={'https://twitter.com/skillgarage?s=21'} >
                  <a target="_blank">
                    <Twitter className="h-6 w-6" />
                  </a>
                </Link>
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Link to={{ pathname: "https://www.instagram.com/skillgarage2.0?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" }} target="_blank" href={'https://www.instagram.com/skillgarage2.0?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'} >
                  <a target="_blank">
                    <Instagram className="h-6 w-6" />
                  </a>
                </Link>
              </div>
            </div>
            <p className="text-gray-400">
              ©{new Date().getFullYear()} - Skill Garage
            </p>
          </div>
          <div className=" row-span-1 md:col-span-4 sm:col-span-12 col-start-1 col-end-12 sm:col-start-1 sm:col-end-12 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Useful Links</p>
            <ul className="text-black-500 ">
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href="/" >
                  <a>Home</a>
                </Link>
              </li>
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href="/staffing" >
                  <a>Services</a>
                </Link>
              </li>
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href="/our-courses" >
                  <a>Programs</a>
                </Link>
              </li>
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href="/" >
                  <a>Tutors</a>
                </Link>
              </li>
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href="/" >
                  <a>Testimonals</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 md:col-span-4 sm:col-span-12 col-start-1 col-end-12 sm:col-start-1 sm:col-end-12 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Quick Links</p>
            <ul className="text-black-500">
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href={'https://web.classplusapp.com'} >
                  <a target="_blank">Sign In</a>
                </Link>
              </li>
              <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
                <Link href={'https://web.classplusapp.com'} >
                  <a target="_blank">Sign Up</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.fixed_callout}>
        <div className={styles.visible_xs.mbtn_callout}>
          <a className={styles.font_only} href="tel:+918885172133"><Image
            src="/assets/call.png"
            width={40}
            height={40}
            alt="Free Plan"
          /></a>
          <a className={styles.font_only}
            href="https://api.whatsapp.com/send?phone=+918885172133&amp;text=Hi, Skill Garage - I'm Interested in knowing details for the courses you offer."
            target="_blank">
            <Image
              src="/assets/whatsapp.png"
              width={50}
              height={50}
              alt="Free Plan"
            />
          </a>
        </div>
        <div className={styles.hidden_xs}>
          <h4>Quick Connect</h4>
          <a className={styles.font_only}
            href="https://api.whatsapp.com/send?phone=+918885172133&amp;text=Hi, Skill Garage - I'm Interested in knowing details for the courses you offer."
            target="_blank">
            <Image
              src="/assets/whatsapp.png"
              width={50}
              height={50}
              alt="Free Plan"
            />
            Whatsapp Now</a>
          <a className={styles.font_only} href="tel:+918885172133">
            <Image
              src="/assets/call.png"
              width={40}
              height={40}
              alt="Free Plan"
            />
            +918885172133
          </a>
        </div>
      </div>
    </>





  );
};

export default Footer;
