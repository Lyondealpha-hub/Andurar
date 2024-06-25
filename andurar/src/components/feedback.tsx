
import React from 'react';
import { Form, Input, Button } from 'antd';
import ButtonTemplate from '@/template/button';

const FeedbackForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='' id='feedback'>
            <div className='py-5'>
                <h2 className='text-[28px] font-medium'>Give us your feedback</h2>
                <p>We'd love to hear from you on what you think about Andurar Hotel.</p>
            </div>
            <Form
                form={form}
                name="feedback"
                onFinish={onFinish}
                layout="vertical"
                className=''
            // style={{ color: '#fff' }}
            >
                <Form.Item
                    name="fullName"
                    label={<p className='text-white'>{"Full Name"}</p>}
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label={<p className='text-white'>{"Email Address"}</p>}
                    rules={[{ required: true, message: 'Please input your email address!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="message"
                    label={<p className='text-white'>{"Leave a message"}</p>}
                    rules={[{ required: true, message: 'Please leave a message!' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <ButtonTemplate isText text={"Send Feedback"} />
                </Form.Item>
            </Form>
        </div>
    );
};

export default FeedbackForm;