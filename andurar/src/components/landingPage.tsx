import Image from 'next/image'
import React from 'react'
import landing from '../../public/images/landing.jpg'
import BookingBanner from './BookingBanner'

const LandingPage = () => {
    return (
        <main className='w-full h-full relative isolate overflow-hidden'>
            <BookingBanner />

            <div className='w-full h-full flex justify-between'>
                {/* text */}
                <aside className='w-1/2 px-10 bg-[#e8e8e8]'>
                    <p className='py-5 '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <h1 className='text-[36px] font-bold leading-normal'>Experience Affordable Luxury Life!</h1>
                </aside>
                {/* image design */}
                <aside className={`w-1/2`}>
                    <Image src={landing} className='w-full h-full' alt='' />
                </aside>
            </div>

        </main>
    )
}

export default LandingPage