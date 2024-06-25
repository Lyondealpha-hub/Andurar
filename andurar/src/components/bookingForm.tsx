import ModalTemplate from '@/template/modal'
import React from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    // TextArea

} from 'antd';
import InputsTemplate from '@/template/input';
import SelectsTemplate from '@/template/select';
import DateTemplate from '@/template/date';
import ButtonTemplate from '@/template/button';


interface props {
    isOpen: boolean
    setisOpen?: (value: boolean) => void
}

const BookingForm = ({ isOpen, setisOpen }: props) => {

    const { TextArea } = Input

    const NE = [
        { id: 0, label: "FirstName", },
        { id: 1, label: "LastName", },

    ]


    return (
        <main className='w-full h-full'>
            <ModalTemplate title={<p className='text-[30px] font-serif font-semibold flex justify-center items-center italic'>{"Hotel Booking Form"}</p>} content={<div className='w-full'>
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 24 }}
                    layout="horizontal"
                // disabled={componentDisabled}
                // style={{ maxWidth: 600 }}
                >

                    <InputsTemplate labelCol={6} label={"Full Name"} />
                    <InputsTemplate labelCol={6} label={"Email"} />
                    <SelectsTemplate
                        label={"Room Type"}
                        labelCol={6}
                        wrapperCol={24}
                        styles={{ marginRight: 6 }}

                    />
                    <InputsTemplate labelCol={6} label={"No of Guest"} />
                    <DateTemplate labelCol={6} label={"Check-In"} />
                    <DateTemplate labelCol={6} label={"Check-Out"} />

                    <Form.Item label="Free Pickup?">
                        <Radio.Group>
                            <Radio value="yes"> Yes Please! - Pick me up on arrival </Radio>
                            <Radio value="no"> No Thanks - I will make my own way there </Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Special Request">
                        <TextArea rows={4} placeholder="Special Request here ..." maxLength={300} />
                    </Form.Item>

                    <div className='w-full flex justify-center items-center'>
                        <ButtonTemplate type={"primary"} isText text={"Submit"} />
                    </div>

                </Form>

            </div>}
                isopen={isOpen}
                handleCancel={() => { setisOpen && setisOpen(false) }}
            />
        </main>
    )
}

export default BookingForm