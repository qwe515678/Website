import React from "react"
export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 mt-44">
            <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
                <small className="hover:text-white duraion-200 font-mono">
                    All rights reserved © copy; {new Date().getFullYear()}
                </small>
                <small className="hover:text-white duration-200 font-mono group">
                    <a href="https://github.com/qwe515678" target="_blank">
                        <span className="mr-1">Created with love by</span><span className=" text-orange-500 group-hover:text-orange-200">Dmitry Levkin</span>
                    </a>
                </small>
            </div>
        </footer>
    )
}