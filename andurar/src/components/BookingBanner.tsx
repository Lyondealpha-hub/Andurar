import React from 'react'
import { DatePicker, Space, Divider, Form, Select } from 'antd';
import DateTemplate from '@/template/date';
import SelectsTemplate from '@/template/select';
import InputsTemplate from '@/template/input';
import ButtonTemplate from '@/template/button';

const BookingBanner = () => {
    return (
        <main className='w-[65%] h-20 mx-auto mt-[300px] flex justify-center items-center bg-white rounded-md text-black absolute  bottom-4 inset-0 z-20 '>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 24 }}
                layout="inline"
                className='w-full flex justify-center items-center'
            >
                <div className='w-full flex justify-evenly items-center my-2'>

                    <DateTemplate label={"Check-In"} />
                    <DateTemplate label={"Check-Out"} />
                    <InputsTemplate label={"No of Guest"} isNumber />
                    <ButtonTemplate type="primary" isText text='Book Now' />
                </div>

            </Form>
        </main>
    )
}

export default BookingBanner