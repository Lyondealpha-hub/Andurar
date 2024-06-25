"use client"
import React from 'react'
import { Input, Form, InputNumber } from 'antd'

interface props {
    inputType?: string
    handleChange?: (e: any) => void
    defaultValue?: string
    label?: any
    extraWidget?: any
    styles?: any
    labelCol?: any
    wrapperCol?: any
    isNumber?: boolean

}

const InputsTemplate = ({ defaultValue, handleChange, inputType, label, extraWidget, styles, labelCol, wrapperCol, isNumber }: props) => {
    return (
        <>
            <Form.Item labelCol={{ span: labelCol }} wrapperCol={{ span: wrapperCol }} label={label} >
                <div className="flex flex-row justify-center items-center">

                    {isNumber ?
                        <InputNumber
                            type={inputType}
                            style={{ ...styles }}
                            onChange={(e: any) => {
                                const value = e.target.value
                                handleChange && handleChange(value)
                            }}
                            defaultValue={defaultValue}

                        />
                        :
                        <Input
                            type={inputType}
                            style={{ ...styles }}
                            onChange={(e: any) => {
                                const value = e.target.value
                                handleChange && handleChange(value)
                            }}
                            defaultValue={defaultValue}

                        />
                    }

                    {extraWidget && <div>{extraWidget}</div>}
                </div>
            </Form.Item>
        </>
    )
}

export default InputsTemplate