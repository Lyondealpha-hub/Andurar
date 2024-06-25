"use client"
import React, { useState, Fragment } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const FAQ = () => {
    const [open, setOpen] = useState<number>(0);


    function Icon({ id, open }: any) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };


    const faqs = [
        { id: 1, header: "Drop me to read more ", desc: "Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra platea pellentesque. Velit sed id at massa scelerisque interdum mi faucibus. Cursus massa" },
        { id: 2, header: "How to Book a hotel", desc: "Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra platea pellentesque. Velit sed id at massa scelerisque interdum mi faucibus. Cursus massa" },
        { id: 3, header: "Lorem ipsum dolor sit amet consectetur", desc: "Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra platea pellentesque. Velit sed id at massa scelerisque interdum mi faucibus. Cursus massa" },
        { id: 4, header: "Drop me to read more", desc: "Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra platea pellentesque. Velit sed id at massa scelerisque interdum mi faucibus. Cursus massa" },
    ]

    return (
        <main className='w-full bg-[#E9E9E9] mt-5 rounded ' id='faq'>
            <div className="text-4xl text-black py-5 flex justify-center items-center">
                {"Find Your Questions"}
            </div>

            <div className='w-[80%] flex justify-between  mx-auto py-5'>
                <aside className='w-1/2 px-10'>
                    {faqs.map(({ id, header, desc }) => {
                        return (
                            <Fragment key={id}>
                                <Accordion open={open === id} icon={<Icon id={id} open={open} />}
                                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <AccordionHeader onClick={() => { handleOpen(id) }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {header}
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <p className=' text-ellipsis flex justify-center items-center'>{desc}</p>
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>
                        )
                    })}
                </aside>

                <aside className='w-1/2 px-10'>
                    <p className=' font-normal leading-normal'>
                        Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra platea pellentesque. Velit sed id at massa scelerisque interdum mi faucibus. Cursus massa blandit in orci nibh tincidunt nibh proin. Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra platea pellentesque. Velit sed id at massa scelerisque interdum mi faucibus. Cursus massa blandit in orci nibh tincidunt nibh proin. Lorem ipsum dolor sit amet consectetur. Nascetur non consequat lobortis purus eu ante leo. Facilisi non pretium nulla enim sed viverra. Nascetur non
                    </p>
                </aside>
            </div>


        </main>
    )
}

export default FAQ