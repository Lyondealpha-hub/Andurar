"use client"

import React from 'react'
import { Input, Form, Select } from 'antd'

interface props {
    inputType?: string
    handleChange?: (e: any) => void
    defaultValue?: string
    label?: any
    extraWidget?: any
    styles?: any
    labelCol?: any
    wrapperCol?: any

}

const SelectsTemplate = ({ defaultValue, handleChange, inputType, label, extraWidget, styles, labelCol, wrapperCol }: props) => {
    return (
        <Form.Item labelCol={{ span: labelCol }} wrapperCol={{ span: wrapperCol }} label={label} >
            <div className="w-full flex h-full">
                <Select
                    style={{ ...styles }}
                    onChange={(e: any) => {
                        const value = e.target.value
                        handleChange && handleChange(value)
                    }}
                    defaultValue={defaultValue}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}

                />

                {extraWidget && <div>{extraWidget}</div>}
            </div>
        </Form.Item>

    )
}

export default SelectsTemplate