import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PDXLogo from "../assets/pdxlogo.svg";
export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <header className="container mt-10 flex flex-col items-center text-center">
                <PDXLogo style={{ height: "50px" }} />
                <h1 className="hidden">{siteConfig.title}</h1>
                <h1 className="mt-5">{siteConfig.tagline}</h1>
                <h2 className="">
                    A faster way to build and manage applications powered by
                    Language Models
                </h2>
                <h3 className="mt-5 font-normal">
                    <Link className="" to="/docs/getting-started/introduction">
                        Get Started with your first Agent - 2min ⏱️
                    </Link>
                </h3>
            </header>
            <main>
                <div className="mt-5 flex flex-col items-center">
                    <div className="my-5 bg-slate-800 text-slate-100 font-mono rounded-md">
                        <div className="flex flex-row py-2 px-2 border-solid border-b border-t-0 border-r-0 border-l-0 border-slate-400/70">
                            <div className="w-3 h-3 mx-0.5 rounded-full bg-slate-600" />
                            <div className="w-3 h-3 mx-0.5 rounded-full bg-slate-600" />
                            <div className="w-3 h-3 mx-0.5 rounded-full bg-slate-600" />
                        </div>
                        <div className="pt-6 pl-3 pr-24 overflow-x-auto whitespace-nowrap">
                            <p className="whitespace-nowrap">
                                {"> pip install pdx"}
                            </p>
                            <p className="whitespace-nowrap">
                                {"> pdx create <agent_name>"}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
