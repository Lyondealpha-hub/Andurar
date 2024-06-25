"use client"
import React, { ReactElement } from 'react'
import { Card } from "antd"

interface props {
    title?: any
    bordered?: boolean
    styles?: any
    content: ReactElement
    classname?: string
}

const CardTemplate = ({ title, bordered, styles, content, classname }: props) => {
    return (
        <div>
            <Card className={classname} title={title} bordered={false} style={{ ...styles, width: 300 }}>
                {content}
            </Card>
        </div>
    )
}

export default CardTemplate