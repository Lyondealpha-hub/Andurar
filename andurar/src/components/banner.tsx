import ButtonTemplate from '@/template/button'
import Image from 'next/image'
import React from 'react'
import arrow from '../../public/images/rightarrow.png'
import phone from '../../public/images/phone.png'

const Banner = () => {
    return (
        <main className='w-full py-5'>
            <div className='w-[60%] p-8 text-white bg-black rounded-xl flex justify-between items-center mx-auto'>
                <aside className='w-1/2'>
                    <h2 className='text-[28px] font-medium leading-normal'>
                        Ready to book a stay at our hotel?
                    </h2>
                    <p>
                        Best luxury rooms at cheap and affordable prices for all
                    </p>
                </aside>

                <aside className='w-1/2 flex px-5 space-x-4 justify-center items-center'>
                    <Image src={arrow} width={70} height={70} alt='' className={'animate-bounce flex items-center justify-center '} />
                    <ButtonTemplate isText classname={'bg-black text-white'} customizableBtnImage={phone} customizableBtnImageClassname={'w-3.5 bg-transparent'} text='+223 55 735 6616' />
                    <ButtonTemplate isText classname={'flex justify-center items-center'} text='Book Now' />
                </aside>
            </div>
        </main>
    )
}

export default Banner