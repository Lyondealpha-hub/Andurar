import React from 'react'
import { Col, Row } from 'antd';
import { gallaryType } from './types/types';
import gallary from '../../public/images/gallary.jpg';
import gal2 from '../../public/images/gal2.jpg';
import gal3 from '../../public/images/gal3.jpg';
import gal4 from '../../public/images/gal4.jpg';
import gal5 from '../../public/images/gal5.jpg';
import gal6 from '../../public/images/feature1.jpg';
import Image from 'next/image';

const Gallary = () => {

    const gallarytemplate: gallaryType[] = [
        { id: "1", items: [{ id: 0, img: gallary }, { id: 1, img: gal2 }, { id: 2, img: gal3 }] },
        { id: "2", items: [{ id: 4, img: gal6 }, { id: 5, img: gal4 }, { id: 6, img: gal5 }] },
    ]

    return (
        <main className='w-full h-full  justify-center items-center py-5'>
            <h1 className='flex justify-center items-center text-[#2A2A2A] text-[36px] font-semibold leading-normal py-4'>Andurar Hotel Gallery</h1>
            <div className='w-full'>
                {gallarytemplate.map(({ id, items }) => {
                    return (
                        <div key={id} className="flex flex-wrap justify-center mb-4 ">
                            {items.map(({ id, img }) => {
                                return (
                                    <div key={id} className=" p-4 flex justify-evenly items-center  ">
                                        <Image src={img} alt='' className="object-cover w-[395px] h-[252px] rounded-lg shadow-lg" />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}

            </div>

        </main>
    )
}

export default Gallary