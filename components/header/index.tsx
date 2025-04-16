"use client"

import {Button} from "@/components/ui/button"
import React, {useEffect, useState} from "react"
import {BsGithub} from "react-icons/bs"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

// icons
import {SiShadcnui} from "react-icons/si"
import {FaXTwitter} from "react-icons/fa6"

const Header = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <header className="py-[10px] border-b backdrop-blur-[7px] sticky top-0 z-10">
            <div className="container2 flex justify-between items-center gap-[10px]">
                <div className="flex justify-center items-center gap-[20px]">
                    <div className="flex justify-start items-center gap-[20px]">
                        <div className="flex justify-start items-center gap-[10px]">
                            <SiShadcnui />
                            <p className="font-bold">Shadcn UI Pro</p>
                        </div>

                        <div className="*:font-medium *:cursor-pointer *:opacity-80 flex justify-start items-center gap-[15px] max-[875px]:hidden">
                            <p>Docs</p>
                            <p>Components</p>
                            <p>Themes</p>
                            <p>Examples</p>
                            <p>Blocks</p>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-[15px] max-[400px]:gap-[5px]">
                    <Button
                        variant="outline"
                        size="icon"
                        className="cursor-pointer">
                        <BsGithub />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="cursor-pointer">
                        <FaXTwitter />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="cursor-pointer relative"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }>
                        <Sun
                            className={`h-[1.2rem] w-[1.2rem] transition-all ${
                                theme === "dark"
                                    ? "rotate-0 scale-0"
                                    : "rotate-0 scale-100"
                            }`}
                        />
                        <Moon
                            className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
                                theme === "dark"
                                    ? "rotate-0 scale-100"
                                    : "rotate-90 scale-0"
                            }`}
                        />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
