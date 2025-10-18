"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "02",
            catagory: "KITCHING SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "03",
            catagory: "DROWING SETUP",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 surface-glass">
                        <div className="h-4 bg-orange-300"></div>
                        <h1 className="pt-4 text-2xl font-extrabold text-white">
                            {item.title}
                        </h1>
                        <p className="py-4 text-white opacity-90">{item.description}</p>
                    </div>
                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 surface-glass">
                        <p className="tracking-wider -rotate-90 text-white">{item.catagory} </p>
                        <span className="text-white">
                            {item.id}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}