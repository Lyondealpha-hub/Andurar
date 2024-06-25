import Image from 'next/image'
import React from 'react'
import feature1 from "../../public/images/feature1.jpg"
import feature2 from "../../public/images/feature2.jpg"
import feature3 from "../../public/images/feature3.jpg"
import location from "../../public/images/location.png"

const Feature = () => {
    return (
        <main className='w-full py-10'>
            <div className='w-full flex justify-between items-center '>
                {/* image here */}
                <aside className='w-1/2 flex justify-center items-center h-full'>
                    <div className="relative w-[600px] h-[400px]">
                        <div className="absolute top-0 right-1 w-[60%] h-[60%] p-4">
                            <Image src={feature1} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        </div>
                        <div className="absolute top-1/4 left-2 w-[60%] h-[60%] p-4">
                            <Image src={feature2} alt="Image 2" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] p-4">
                            <Image src={feature3} alt="Image 3" className="object-cover w-full h-full rounded-lg shadow-lg" />
                        </div>
                    </div>
                    {/* <Image src={feature1} width={250} height={250} alt='bedroom-pics' />
                    <Image src={feature2} width={250} height={250} alt='bedroom-pics' />
                    <Image src={feature3} width={250} height={250} alt='bedroom-pics' /> */}
                </aside>
                {/* writing */}
                <aside className='w-1/2 ' id='aboutus'>
                    <h1 className='text-[#2A2A2A] text-[36px] font-semibold  leading-normal'>About Andurar Hotel</h1>
                    <div className='flex space-x-2 pb-5'>
                        <Image src={location} alt='pin' />
                        <p className='text-[18px] font-medium leading-normal'>Tema Community 11, Accra</p>
                    </div>

                    <p className='text-[18px] font-normal leading-normal'>
                        Lorem ipsum dolor sit amet consectetur. Iaculis proin scelerisque proin feugiat. Nisl tristique elementum enim accumsan. Fermentum orci nulla augue lacus arcu vitae. Velit faucibus felis sed sit.
                        Lorem ipsum dolor sit amet consectetur. Iaculis proin scelerisque proin feugiat. Nisl tristique elementum enim accumsan. Fermentum orci nulla augue lacus arcu vitae. Velit faucibus felis sed sit.
                        Lorem ipsum dolor sit amet consectetur. Iaculis proin scelerisque proin feugiat. Nisl tristique elementum enim accumsan. Fermentum orci nulla augue lacus arcu vitae. Velit faucibus felis sed sit. Nisl tristique elementum enim accumsan. Fermentum orci nulla augue lacus arcu vitae. Velit faucibus felis sed sit.
                    </p>
                </aside>
            </div>

        </main>
    )
}

export default Feature