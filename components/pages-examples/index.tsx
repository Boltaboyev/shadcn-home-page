import React from "react"

// icons
import {MdOutlineColorLens} from "react-icons/md"

const PagesExamples = () => {
    return (
        <section className="py-[70px] flex flex-col gap-[10px] justify-center items-center">
            <div className="text-center flex flex-col gap-2 justify-center items-center">
                <h1 className="font-black text-4xl max-[630px]:text-3xl max-[555px]:text-xl leading-[100%]">
                    12+ <br /> Starter Pages & Examples
                </h1>
                <p className="text-[18px] opacity-80 max-[370px]:text-[14px] w-[60%] max-[830px]:w-[80%] max-[550px]:w-full max-[550px]:text-[15px]">
                    Kick-start your projects with Preline Pro's wide range of
                    examples, using pre-built UI parts, custom components and
                    layouts using Tailwind CSS.
                </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-[20px] mt-[60px] max-[1020px]:grid-cols-2 max-[600px]:grid-cols-1 max-[440px]:gap-[10px] max-[600px]:*:border">
                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Responsive Design
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Create stunning websites that adapt seamlessly to
                            different screen sizes and devices.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Extensive Component Library
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Choose from a vast collection of pre-built
                            components to accelerate your application
                            development.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Customizable Styles
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Easily customize the look and feel of your
                            application with our flexible styling options.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Accessibility Ready
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Ensure your application is accessible to all users,
                            regardless of their abilities or devices.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Cross-Browser Compatibility
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Rest assured that your application will work
                            flawlessly across all major browsers.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Optimized Performance
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Deliver fast-loading and smooth user experiences
                            with our performance-optimized codebase.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PagesExamples
