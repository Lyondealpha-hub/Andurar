import React from 'react'
import { Col, Row } from 'antd';
import CardTemplate from '@/template/card';
import Image from 'next/image';
import gal2 from '../../public/images/gal4.jpg'
import gym from '../../public/images/gym.png'
import games from '../../public/images/games.png'
import event from '../../public/images/event.png'
import lounge from '../../public/images/lounge.png'
import conf from '../../public/images/conference.png'
import dish from '../../public/images/dish.png'
import beach from '../../public/images/beach.png'
import camera from '../../public/images/camera.png'

const Facilities = () => {

    const facility: any[] = [
        { id: "1", items: [{ id: 0, label: "Event Space", desc: "gallary", img: event }, { id: 1, label: "Conference Hall", desc: "gal2", img: conf }, { id: 2, label: "Restaurant & SkyBar", desc: "gal3", img: dish }, { id: 6, label: "PoolSide", desc: "gal5", img: beach }] },
        { id: "2", items: [{ id: 4, label: "Lounge Room", desc: "gal6", img: lounge }, { id: 5, label: "Spa & Gym", desc: "gal4", img: gym }, { id: 6, label: "Game Center", desc: "gal5", img: games }, { id: 6, label: "Theatre", desc: "gal5", img: camera }] },

    ]
    return (
        <main className='w-full h-full'>

            <div className={`w-full px-10 relative isolate overflow-hidden bg-fixed`}>
                <h1 className='text-[36px] font-semibold leading-normal py-8'>Facilities</h1>
                <Image src={gal2} alt='' className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-sm' />
                {facility.map(({ id, items }) => {
                    return (
                        <Row key={id} justify="space-evenly" align="middle" className='py-3'>
                            {items.map(({ id, desc, label, img }: any) => {
                                return (
                                    <Col className='' span={4}>
                                        <CardTemplate
                                            classname='hover:-translate-y-1 hover:scale-110 duration-300'
                                            title={<div className='w-full relative flex transition ease-in-out delay-150 '>
                                                <span className="animate-ping absolute inline-flex w-4 h-4 rounded-full  bg-blue-500 opacity-75 "></span>
                                                <span className="relative inline-flex w-2 h-2 rounded-full   bg-blue-500"></span>

                                                <span className='flex'>
                                                    <Image src={img} alt='' className='' />
                                                    <p className='px-2'>{label}</p>
                                                </span>
                                            </div>}
                                            content={
                                                <div className=''>

                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur. Morbi commodo tristique nunc hac. Urna iaculis mollis scelerisque sit diam amet. Elementum ullamcorper augue vel sit adipiscing dictum molestieElementum ullamcorper augue vel
                                                    </p>
                                                </div>
                                            }
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    );
                })}



            </div>
        </main>
    )
}

export default Facilities