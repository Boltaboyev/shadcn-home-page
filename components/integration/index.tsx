import React from "react"

// icons
import {RiTailwindCssFill} from "react-icons/ri"

const Integration = () => {
    return (
        <section className="py-[70px] flex flex-col gap-[10px] justify-center items-center">
            <h1 className="font-bold text-4xl max-[630px]:text-3xl relative flex justify-center items-center max-[555px]:text-xl max-[370px]:text-center">
                Ship faster with endless integrations
                <svg
                    viewBox="0 0 418 42"
                    className="fill-[#fafafa56] absolute -z-1 right-0 w-[50%] top-5 max-[370px]:hidden">
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
            </h1>

            <div className="w-full grid grid-cols-3 gap-[20px] mt-[20px] max-[750px]:grid-cols-2 max-[440px]:grid-cols-1 max-[440px]:gap-[10px] max-[440px]:*:border">
                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-center gap-[20px]">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="flex flex-col gap-0 leading-[125%]">
                        <h3 className="font-bold text-xl">Tailwind</h3>
                        <p className="opacity-80">Tailwind des</p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-center gap-[20px]">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="flex flex-col gap-0 leading-[125%]">
                        <h3 className="font-bold text-xl">Stripe</h3>
                        <p className="opacity-80">Stripe des</p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-center gap-[20px]">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="flex flex-col gap-0 leading-[125%]">
                        <h3 className="font-bold text-xl">NextAuth</h3>
                        <p className="opacity-80">NextAuth des</p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-center gap-[20px]">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="flex flex-col gap-0 leading-[125%]">
                        <h3 className="font-bold text-xl">Supabase</h3>
                        <p className="opacity-80">Supabase des</p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-center gap-[20px]">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="flex flex-col gap-0 leading-[125%]">
                        <h3 className="font-bold text-xl">Mailngun</h3>
                        <p className="opacity-80">Mailngun des</p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-center gap-[20px]">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="flex flex-col gap-0 leading-[125%]">
                        <h3 className="font-bold text-xl">NextJS</h3>
                        <p className="opacity-80">NextJS des</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Integration
