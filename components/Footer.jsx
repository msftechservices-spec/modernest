import Link from "next/link";


export default function Footer() {

    return (
        <div className="">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold text-accent">COMPANY</h2>
                        <div className="flex flex-col">
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/about">About Us</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/press">Press</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/careers">Careers</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/contact">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold text-accent">DEVELOPMENT</h2>
                        <div className="flex flex-col">
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/about">Documentation</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/press">API Reference</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/careers">Changelog</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/contact">Status</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold text-accent">CONNECT</h2>
                        <div className="flex flex-col">
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/about">Instagram</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/press">Linkedin</Link>
                            <Link className="py-1 hover:text-accent transition-colors text-text-secondary" href="/careers">Twitter</Link>
                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center border-t border-surface-medium lg:pt-0 lg:text-left lg:border-0 lg:pl-20">
                    <p className="pb-4 text-xl font-semibold text-accent">STAY UPDATED</p>
                    <div className="relative lg:max-w-sm">
                        <input className="w-full px-4 pr-20 surface-glass border border-primary-300/30 rounded-full h-14 text-white placeholder-text-muted focus:border-primary-300/60 focus:outline-none" type="text" placeholder="Email Address" />
                        <button className="btn-primary absolute h-10 px-4 text-sm rounded-full top-2 right-2">Subscribe</button>
                    </div>
                    <p className="pt-4 text-text-secondary">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* Copy Right */}
            <div className="py-10 border-t border-surface-medium">
                <div className="container text-center text-text-secondary lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p>&copy;2023 DIGIMAX.All rights reserved </p>
                    </div>
                    <div className="">
                        <Link className="p-4 hover:text-accent transition-colors" href="/privacy">Privacy</Link>
                        <Link className="p-4 hover:text-accent transition-colors" href="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
