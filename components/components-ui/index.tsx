"use client"
import React, {useState} from "react"

import {CalendarDemo, Charts, ChartTwoLines} from "../ui-items/chart"
import {LineCharts} from "../ui-items/chart/line"
import {Goal} from "../ui-items/goal"
import {LoginForm} from "../ui-items/login"
import ChatUI from "../ui-items/chat"
import {TabsDemo} from "../ui-items/tabs"
import {TableTodo} from "../ui-items/todo"

import {Button} from "../ui/button"
import {CardDemo} from "../ui-items/card"
import {CommandDemo} from "../ui-items/command"

const styles =
    " after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-5  after:z-10 after:w-full after:h-[300px] after:bg-gradient-to-t after:from-white after:via-white/90 after:pointer-events-none dark:after:from-background dark:after:via-background/95"

const ComponentsUi = () => {
    const [show, setShow] = useState(false)
    return (
        <section>
            <div className="container2">
                <div className="text-center flex flex-col gap-2 justify-center items-center">
                    <h1 className="font-black text-4xl max-[630px]:text-3xl max-[555px]:text-xl leading-[100%]">
                        <span className="text-5xl">700+</span> <br /> Tailwind
                        CSS Components
                    </h1>
                    <p className="text-[18px] opacity-80 max-[370px]:text-[14px] w-[60%] max-[830px]:w-[80%] max-[550px]:w-full max-[550px]:text-[15px]">
                        Based on the Tailwind CSS utility classes, Preline UI's
                        prebuilt components and UI elements help you quickly
                        design and customize responsive mobile-first websites.
                    </p>
                </div>

                <div className="relative ">
                    <div
                        className={`my-5 md:pt-24 relative overflow-hidden ${
                            !show && styles
                        } `}>
                        <div className="grid grid-cols-2 gap-[20px] max-[1110px]:grid-cols-1">
                            {/* left side */}
                            <div className="grid grid-cols-2 gap-[20px] max-[550px]:grid-cols-1">
                                <div className="flex flex-col gap-[20px]">
                                    <LineCharts />
                                    <div
                                        className={` ${
                                            !show ? "hidden" : "inline"
                                        }`}>
                                        <LoginForm />
                                    </div>
                                    <div
                                        className={` ${
                                            !show ? "hidden" : "inline"
                                        }`}>
                                        <ChartTwoLines />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[20px]">
                                    <Charts />
                                    <div
                                        className={` ${
                                            !show ? "hidden" : "inline"
                                        }`}>
                                        <ChatUI />
                                    </div>
                                    <div
                                        className={` ${
                                            !show ? "hidden" : "inline"
                                        }`}>
                                        <TabsDemo />
                                    </div>
                                </div>
                            </div>

                            {/* right side */}
                            <div className="flex flex-col gap-[20px]">
                                <div className="grid grid-cols-2 gap-[20px] max-[550px]:grid-cols-1">
                                    <CalendarDemo />
                                    <Goal />
                                </div>
                                <div
                                    className={` ${
                                        !show ? "hidden" : "inline"
                                    }`}>
                                    <div className="max-[550px]:mt-10">
                                        <TableTodo />
                                    </div>
                                </div>
                                <div
                                    className={` grid-cols-2 gap-[20px] max-[550px]:grid-cols-1 ${
                                        !show ? "hidden" : "grid"
                                    }`}>
                                    <CardDemo />
                                    <CommandDemo />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        className="mx-auto  mb-10  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute top- bottom-0 left-1/2 z-20 -translate-x-1/2 "
                        style={{display: show ? "none" : "flex"}}
                        onClick={() => setShow(!show)}>
                        Show more
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ComponentsUi
