import React from "react"

// components
import Showcase from "@/components/showcase"
import Integration from "@/components/integration"
import PagesExamples from "@/components/pages-examples"
import WhyChoose from "@/components/why-choose"
import Faq from "@/components/faq"
import ComponentsUi from "@/components/components-ui"

const MainPage = () => {
    return (
        <>
            <Showcase />
            <Integration />
            <ComponentsUi />
            <PagesExamples />
            <WhyChoose />
            <Faq />
        </>
    )
}

export default MainPage
