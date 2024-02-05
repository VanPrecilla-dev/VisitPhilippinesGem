import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const Footer = () => {
  return (
    <footer   className="flex-col flexCenter overflow-hidden py-10  bg-[#153F58] text-white">
        <div className="max-container padding-container relative w-full flex flex-col gap-5 lg:flex-row lg:gap-5 items-center text-center justify-center">
            <div className='flex flex-col mx-auto gap-2'>
                <p>©2024 All Rights Reserved, VisitPhilippineGem & Van</p>
                <p>Privacy policy | Terms | <a href="https://github.com/VanPrecilla-dev/VisitPhilippinesGem.git" target='_blank' rel='noopener noreferrer' className='underline'>GitHub Source Code</a> </p>
            </div>
            <div className='flex flex-row mx-auto gap-5'>
            <FaSquareFacebook style={{width: '40px', height:'40px'}}/>
            <AiFillInstagram style={{width: '40px', height:'40px'}} />
            <FaTwitterSquare style={{width: '40px', height:'40px'}}/>
            <FaTiktok style={{width: '40px', height:'40px'}}/>
            </div>
        </div>

    </footer>
  )
}

export default Footer