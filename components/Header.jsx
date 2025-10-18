import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 surface-glass">
            <div className="container flex items-center justify-between py-8">

                <div className="flex items-center">
                    <Image src="/ModernNest.png" alt="Modern Nest - Curate to your comfort" width={600} height={240} className="h-28 w-auto" />
                </div>

                <Navigation />
            </div>
        </div>
    );
}