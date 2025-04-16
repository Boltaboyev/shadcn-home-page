import React from "react"
import Image from "next/image"

import {Button} from "../ui/button"

// img
import showcaseImg from "../../public/showcase.png"

// icons
import {LuPaintbrush} from "react-icons/lu"
import {IoFlashOutline} from "react-icons/io5"

const Showcase = () => {
    return (
        <section className="py-[30px] grid grid-cols-2 gap-[20px] max-[875px]:grid-cols-1 max-[875px]:pt-[70px]">
            <div className="flex flex-col justify-center items-start gap-[10px]">
                <div className="relative flex justify-center items-center">
                    <h1 className="font-black text-5xl max-[630px]:text-3xl max-[360px]:font-bold">
                        Shadcn UI Pro <br className="max-[400px]:hidden"/> Ship your startup rapidly
                    </h1>

                    <svg
                        viewBox="0 0 418 42"
                        className="fill-[#fafafa56] absolute -z-1 w-[75%] left-0">
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                </div>

                <p className="text-[19px] leading-[130%] max-[630px]:text-[16px]">
                    Elegant, Simple, and Powerful NextJS boilerplate <br className="max-[400px]:hidden"/> with
                    all you need to build your SaaS.
                </p>

                <div className="flex justify-start items-center gap-[12px] mt-2">
                    <span className="max-[630px]:hidden h-[25px] w-[25px] rounded-full cursor-pointer active:scale-98 bg-gray-700"></span>
                    <span className="max-[630px]:hidden h-[25px] w-[25px] rounded-full cursor-pointer active:scale-98 bg-pink-600"></span>
                    <span className="max-[630px]:hidden h-[25px] w-[25px] rounded-full cursor-pointer active:scale-98 bg-blue-500"></span>
                    <span className="max-[630px]:hidden h-[25px] w-[25px] rounded-full cursor-pointer active:scale-98 bg-green-500"></span>
                    <span className="max-[630px]:hidden h-[25px] w-[25px] rounded-full cursor-pointer active:scale-98 bg-orange-500"></span>

                    <Button variant={"outline"} className="max-[360px]:hidden">
                        <LuPaintbrush />
                        Customize
                    </Button>
                </div>

                <div className="flex justify-start items-center gap-[10px] mt-3 max-[360px]:flex-col max-[360px]:items-start max-[360px]:mt-1">
                    <Button variant={"default"} size="lg">
                        <IoFlashOutline /> Get Started
                    </Button>

                    <Button variant={"outline"} size="lg">
                        $ git clone shadcn-ui-pro
                    </Button>
                </div>
            </div>

            {/* right side */}
            <Image
                src={showcaseImg}
                alt="showcase"
                className="max-[875px]:hidden"
            />
        </section>
    )
}

export default Showcase
