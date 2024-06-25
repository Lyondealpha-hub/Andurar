"use client"
import React from 'react'
import { Form, DatePicker } from 'antd'

interface props {
    inputType?: string
    handleChange?: (e: any) => void
    defaultValue?: any
    label?: any
    extraWidget?: any
    styles?: any
    labelCol?: any
    wrapperCol?: any

}

const DateTemplate = ({ defaultValue, handleChange, inputType, label, extraWidget, styles, labelCol, wrapperCol }: props) => {
    return (
        <>
            <Form.Item labelCol={{ span: labelCol }} wrapperCol={{ span: wrapperCol }} label={label} >
                <DatePicker
                    type={inputType}
                    style={{ ...styles }}
                    onChange={(e: any) => {
                        const value = e.target.value
                        handleChange && handleChange(value)
                    }}
                    defaultValue={defaultValue}

                />
            </Form.Item>
        </>
    )
}

export default DateTemplate