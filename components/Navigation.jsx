"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/gallery', label: 'GALLERY' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)

    // Close menu when route changes
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <>
            {/* Mobile menu button */}
            <button 
                className="block lg:hidden text-white p-2 z-50 relative" 
                onClick={() => setOpen(!isOpen)}
                aria-label="Toggle navigation menu"
            >
                <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Desktop navigation */}
            <nav className="md:flex hidden items-center gap-8 lg:gap-12 text-lg text-white">
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} className={
                        pathname === href 
                            ? 'text-primary-300 font-semibold' 
                            : 'hover:text-primary-200 transition-colors'
                    }>
                        {label}
                    </Link>
                ))}
            </nav>
            
            {/* Mobile menu overlay */}
            <div className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                    onClick={() => setOpen(false)}
                />
                
                {/* Menu panel */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] surface-glass border-l border-white/20 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col h-full pt-20 px-6">
                        <nav className="flex flex-col space-y-6">
                            {nav.map(({ href, label }) => (
                                <Link 
                                    key={href} 
                                    href={href} 
                                    className={`text-xl py-3 px-4 rounded-lg transition-colors ${
                                        pathname === href 
                                            ? 'text-primary-300 font-semibold bg-white/10' 
                                            : 'text-white hover:text-primary-200 hover:bg-white/5'
                                    }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                        
                        <div className="mt-8">
                            <Link 
                                href="/contact" 
                                className="btn-secondary flex items-center justify-center px-6 py-3 font-medium rounded-full shadow-lg w-full"
                                onClick={() => setOpen(false)}
                            >
                                Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Desktop contact button */}
            <Link href="/contact" className="btn-secondary items-center hidden px-5 py-2 font-medium rounded-full shadow lg:inline-flex">
                Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
        </>
    )
}