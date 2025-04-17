import React from "react"

const Footer = () => {
    return (
        <footer className="py-10">
            <div className="container2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo and Description Column */}
                    <div className="col-span-1">
                        <h2 className="text-2xl font-bold mb-4">
                            Shadcn UI Pro
                        </h2>
                        <p className="mb-6">
                            Introducing the ultimate Next.JS boilerplate, your
                            gateway to building a game-changing SaaS, an
                            AI-powered marvel, or any web app you can dream of.
                        </p>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-3">
                            <li>
                                <p>Project Management</p>
                            </li>
                            <li>
                                <p>Multi-tenancy</p>
                            </li>
                            <li>
                                <p>Scalability</p>
                            </li>
                            <li>
                                <p>Customization</p>
                            </li>
                            <li>
                                <p>Integration</p>
                            </li>
                            <li>
                                <p>Mobile accessibility</p>
                            </li>
                            <li>
                                <p>Analytics and reporting</p>
                            </li>
                        </ul>
                    </div>

                    {/* Features Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Features</h3>
                        <ul className="space-y-3">
                            <li>
                                <p>User management</p>
                            </li>
                            <li>
                                <p>Workflow automation</p>
                            </li>
                            <li>
                                <p>API access</p>
                            </li>
                            <li>
                                <p>Data visualization</p>
                            </li>
                            <li>
                                <p>Version control</p>
                            </li>
                            <li>
                                <p>Upgrades</p>
                            </li>
                            <li>
                                <p>Billing and invoicing</p>
                            </li>
                        </ul>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-3">
                            <li>
                                <p>Docs</p>
                            </li>
                            <li>
                                <p>Pricing</p>
                            </li>
                            <li>
                                <p>Integrations</p>
                            </li>
                            <li>
                                <p>Blog</p>
                            </li>
                            <li>
                                <p>About</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
