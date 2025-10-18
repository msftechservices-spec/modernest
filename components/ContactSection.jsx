import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="">
            <div className="container py-14">
                <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left border-b border-surface-medium pb-14 mb-14">
                    <div className="py-4 mb-6 lg:mb-0">
                        <p className="text-2xl text-accent font-medium">Let&apos;s</p>
                        <h1 className="text-3xl font-bold lg:text-6xl text-white">Get in touch</h1>
                    </div>
                    <div className="flex-shrink-0">
                        <a className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full shadow-glow hover:shadow-glow-strong transition-all duration-300" href="tel:+919902456910">
                            CONTACT US <TbArrowUpRight className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="surface-glass p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-accent mb-2">Contact Person</h3>
                                <p className="text-white text-xl">PARMALA</p>
                            </div>
                            
                            <div className="surface-glass p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-accent mb-2">Phone</h3>
                                <a href="tel:+919902456910" className="text-white text-xl hover:text-accent transition-colors">
                                    +91 99024 56910
                                </a>
                            </div>
                            
                            <div className="surface-glass p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-accent mb-2">Email</h3>
                                <a href="mailto:s.parimala70@gmail.com" className="text-white text-xl hover:text-accent transition-colors">
                                    s.parimala70@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-white mb-8">Office Address</h2>
                        <div className="surface-glass p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-accent mb-4">Modern Nest</h3>
                            <address className="text-white text-lg leading-relaxed not-italic">
                                No.7, 1st Floor, K.Narayanapura Cross,<br />
                                Geddalahalli, Kristy Jayanthi College Road,<br />
                                Dr. Shivaramakaranth Nagar Post,<br />
                                Bangalore 560077.
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}