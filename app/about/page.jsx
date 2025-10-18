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
                        The Digimax interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="" className="" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide">
                            We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication. De-signed and handcrafted to hold and showcase my year two architecture portfolio, the unfolding box allows portfolio sheets…
                            <br />
                            <br />

                            We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication.
                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight">The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.</span>
                        </p>
                        <a className="btn-primary inline-flex items-center gap-1 px-6 py-3 text-sm rounded-full shadow-glow hover:shadow-glow-strong" href="">Read More <TbArrowUpRight className="text-xl" /> </a>


                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
                    </div>
                    <div className="grid gap-20 py-8 lg:grid-cols-3">
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-gradient-custom ">
                                <Image src="/image/profile1.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold text-white" >Nattasha Kelvin</h2>
                                <p className="text-sm text-white opacity-80">
                                    Creative Director with over 10 years of experience in interior design.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-gradient-custom ">
                                <Image src="/image/profile2.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold text-white" >Peter Parker</h2>
                                <p className="text-sm text-white opacity-80">
                                    Senior Architect specializing in residential and commercial spaces.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-gradient-custom ">
                                <Image src="/image/profile3.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold text-white" >Jennifer Winget</h2>
                                <p className="text-sm text-white opacity-80">
                                    Project Manager ensuring every detail meets our high standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}