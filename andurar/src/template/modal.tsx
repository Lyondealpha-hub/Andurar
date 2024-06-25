"use client"

import React from 'react'
import { Modal } from 'antd'

interface props {
    content?: React.JSX.Element
    onOk?: () => void
    handleCancel?: () => void
    title?: any
    isopen?: boolean

}

const ModalTemplate = ({ content, handleCancel, onOk, isopen, title }: props) => {
    return (
        <main className='w-full'>
            <Modal
                title={<div className='w-full'>{title ?? "Basic Modal"}</div>}
                open={isopen}
                onOk={onOk}
                onCancel={handleCancel}
                footer={() => (<div></div>)}
            >
                {content}
            </Modal>
        </main>
    )
}

export default ModalTemplate