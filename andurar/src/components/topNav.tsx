"use client"

import ButtonTemplate from '@/template/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BookingForm from './bookingForm'
import andurar from '../../public/images/andurar.png'

const TopNav = () => {

    const [isBooking, setisBooking] = useState<boolean>(false);

    return (
        <>
            <main className='w-full h-[80px] flex justify-center items-center text-[#e8e8e8] bg-[#272525]'>
                <div className='w-full flex justify-center items-center'>
                    {/* Logo */}
                    <aside className='w-[20%] flex px-5 text-black cursor-pointer'>
                        <Image src={andurar} width={150} height={50} alt='logo' className='' />
                    </aside>
                    {/* Nav content */}
                    <aside className='w-[60%] flex justify-evenly '>
                        <Link href={"/"}>Home</Link>
                        <Link href={"#aboutUs"}>About Us</Link>
                        <Link href={"#feedback"}>Feedback</Link>
                        <Link href={"#faq"}>FAQ</Link>
                    </aside >
                    {/* Booking btn */}
                    <aside className='w-[20%]'>
                        <ButtonTemplate isText text='Book Now' handleCustomizableClick={() => { setisBooking(true) }} />
                    </aside>

                </div>

            </main>
            <BookingForm isOpen={isBooking} setisOpen={setisBooking} />
        </>
    )
}

export default TopNav