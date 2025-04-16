import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <section className="py-[20px] flex flex-col">
            <h1 className="text-center w-full font-bold text-4xl mb-3">FAQ</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Does Shadcn UI Pro Affliated with Shadcn or Shadcn/ui?
                    </AccordionTrigger>
                    <AccordionContent>
                        No. Shadcn UI Pro is a professional template that
                        integrates many sass services and can quickly build
                        entrepreneurial projects.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>What is Shadcn UI Pro?</AccordionTrigger>
                    <AccordionContent>
                        Shadcn UI Pro is a premium UI framework designed for
                        modern web development projects.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What are the key features of Shadcn UI Pro?
                    </AccordionTrigger>
                    <AccordionContent>
                        Shadcn UI Pro offers a responsive design, an extensive
                        component library, customizable styles, accessibility
                        support, cross-browser compatibility, optimized
                        performance, and developer-friendly code.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Can Shadcn UI Pro be used for different screen sizes and
                        devices?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, Shadcn UI Pro is designed to create websites that
                        adapt seamlessly to various screen sizes and devices.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Is it easy to customize the styles of Shadcn UI Pro?
                    </AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Shadcn UI Pro provides flexible styling
                        options, allowing you to easily customize the appearance
                        of your application.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        Does Shadcn UI Pro support accessibility?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, Shadcn UI Pro is built with accessibility in mind,
                        ensuring that your application is accessible to all
                        users.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        CWill my application built with Shadcn UI Pro work on
                        different browsers?
                    </AccordionTrigger>
                    <AccordionContent>
                        Definitely! Shadcn UI Pro is tested and compatible with
                        all major browsers, ensuring a consistent experience for
                        your users.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>
                        Does Shadcn UI Pro prioritize performance?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, Shadcn UI Pro is optimized for performance,
                        delivering fast-loading and smooth user experiences.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                    <AccordionTrigger>
                        Is Shadcn UI Pro suitable for beginners?
                    </AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Shadcn UI Pro is designed to be
                        user-friendly, making it accessible to developers of all
                        levels.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                    <AccordionTrigger>
                        What kind of support is available for Shadcn UI Pro?
                    </AccordionTrigger>
                    <AccordionContent>
                        We provide excellent support for Shadcn UI Pro. Our
                        dedicated support team is available to assist you with
                        any questions or issues you may encounter.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                    <AccordionTrigger>
                        Can I join a community of developers using Shadcn UI
                        Pro?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, we have an active community of developers using
                        Shadcn UI Pro. Join us to collaborate, learn, and access
                        valuable resources.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default Faq
