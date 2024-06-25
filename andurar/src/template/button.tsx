"use client"

import React, { Fragment } from 'react'
import { Button } from 'antd'
import Image from 'next/image'

interface props {
    name?: string
    isText?: boolean
    text?: string,
    buttonID?: string,
    classname?: any,
    handleCustomizableClick?: () => void,
    customizableBtnImage?: any,
    customizableBtnImageClassname?: any,
    type?: "default" | "dashed" | "link" | "primary"
}

// customizable button

const ButtonTemplate = ({
    isText = false,
    text = "Search",
    buttonID = "search",
    classname,
    handleCustomizableClick,
    customizableBtnImage,
    customizableBtnImageClassname,
    type = "default",
}: props) => {
    return (
        <Fragment>
            <Button
                type={type}
                id={buttonID}
                onClick={handleCustomizableClick}
                // style={{ borderColor: borderTheme }}
                className={`${classname} border-[1px] border-slate-200 rounded`}
            >
                <Image
                    alt=""
                    className={customizableBtnImageClassname}
                    src={customizableBtnImage}
                />
                {isText && text}
            </Button>
        </Fragment>
    )
}

export default ButtonTemplate


