import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"
export default function About() {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left relative z-10">WHO ARE WE?</h1>
            </div>
            <div className="container ">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">We have great idea & Interior Design</h2>
                    <p className="text-2xl font-medium lg:w-1/2">
                        Modern Nest is a company engaged in the field of interior design, established in 2025. We provide the best interior design services for homes, offices, apartments, and others. We create beautiful, functional spaces that reflect our clients&apos; personal style and needs.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="" className="" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide">
                            Modern Nest is dedicated to transforming spaces into beautiful, functional environments that reflect our clients&apos; unique personalities and lifestyles. We believe that great design has the power to enhance daily life and create meaningful connections between people and their spaces.
                            <br />
                            <br />

                            Our approach combines modern design principles with timeless aesthetics, ensuring that every project we undertake stands the test of time while meeting contemporary needs. We work closely with our clients to understand their vision and bring it to life with attention to detail and craftsmanship.
                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight">At Modern Nest, we share a belief in the transformational power of thoughtful design to create harmony in every space.</span>
                        </p>
                        <a className="btn-primary inline-flex items-center gap-1 px-6 py-3 text-sm rounded-full shadow-glow hover:shadow-glow-strong" href="">Read More <TbArrowUpRight className="text-xl" /> </a>


                    </div>
                </div>
            </div>
        </div >
    )
}