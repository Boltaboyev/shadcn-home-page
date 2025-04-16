import React from "react"

// icons
import {MdOutlineColorLens} from "react-icons/md"

const WhyChoose = () => {
    return (
        <section className="py-[50px] flex flex-col gap-[10px]">
            <h1 className="font-bold text-2xl max-[630px]:text-xl max-[555px]:text-lg leading-[100%] text-start">
                Why Choose Shadcn UI Pro?
            </h1>

            <div className="w-full grid grid-cols-3 gap-[20px] max-[1020px]:grid-cols-2 max-[600px]:grid-cols-1 max-[440px]:gap-[10px] max-[600px]:*:border">
                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Why Choose Shadcn UI Pro?
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Our framework is designed to be user-friendly,
                            allowing developers of all levels to create
                            professional-looking applications with ease.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Versatility
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Shadcn UI Pro is well-suited for a wide range of
                            applications, from corporate websites to e-commerce
                            platforms and personal blogs.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Excellent Support
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Our dedicated support team is always available to
                            assist you with any issues or questions you may
                            have.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Regular Updates
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            We continually improve and enhance Shadcn UI Pro
                            based on user feedback and emerging industry trends.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-accent p-[15px] py-[20px] transition duration-[.2s] rounded-md flex justify-start items-start gap-[15px]">
                    <div>
                        <MdOutlineColorLens className="text-[30px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-0 leading-[125%] w-[80%] max-[1020px]:w-fit">
                        <h3 className="font-bold text-xl max-[370px]:text-[16px]">
                            Thriving Community
                        </h3>
                        <p className="opacity-80 max-[370px]:text-[14px]">
                            Join our active community of developers to
                            collaborate, learn, and access valuable resources.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
