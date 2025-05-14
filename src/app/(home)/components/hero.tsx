import HeroImage from "@/assets/images/hero.svg";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-32">
            <div className="container mx-auto px-6 sm:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Content Section */}
                    hero content
                </div>

                <div
                    className="relative hidden lg:flex justify-center items-center"
                >
                    <div className=" flex justify-center items-center">
                        <Image
                            src={HeroImage}
                            width={500}
                            height={500}
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;