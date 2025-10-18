import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {

    return (

        <div className="relative overflow-hidden">
            <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between relative z-10">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                    <p className="tracking-widest text-white">OFFER FOR THE BEST INTERIOR</p>
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-white xl:text-6xl lg:text-4xl">
                        An aesthetic room is <br />given harmony
                    </h1>
                    <p className="pb-6 text-white opacity-80 xl:pb-10">
                        Change your view with the best interior design. <br /> We provide the best interior design for your Home. <br />Make every moment beautiful with the best interior design.
                    </p>
                    <button className="btn-primary inline-flex items-center px-8 py-3 rounded-full shadow-glow hover:shadow-glow-strong">
                        Get Started <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                <div className="w-1/2">
                    <Image src="/image/kitchen.png" width={800} height={500} alt="" className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block" />
                </div>

            </div>
        </div>
    );
}