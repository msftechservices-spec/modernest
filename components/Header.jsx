import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 surface-glass">
            <div className="container flex items-center justify-between py-3 md:py-6">

                <div className="flex items-center flex-shrink-0">
                    <Image src="/ModernNest.png" alt="Modern Nest - Curate to your comfort" width={400} height={160} className="h-8 md:h-12 w-auto max-h-12" />
                </div>

                <div className="flex items-center ml-8">
                    <Navigation />
                </div>
            </div>
        </div>
    );
}