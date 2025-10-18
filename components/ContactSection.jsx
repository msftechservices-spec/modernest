import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="">
            <div className="container flex flex-col lg:flex-row items-center justify-between text-center lg:text-left border-b border-surface-medium py-14">
                <div className="py-4 mb-6 lg:mb-0">
                    <p className="text-2xl text-accent font-medium">Let&apos;s</p>
                    <h1 className="text-3xl font-bold lg:text-6xl text-white">Get in touch</h1>
                </div>
                <div className="flex-shrink-0">
                    <a className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full shadow-glow hover:shadow-glow-strong transition-all duration-300" href="">
                        CONTACT US <TbArrowUpRight className="text-xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}