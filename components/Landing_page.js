import Image from "next/image";
import landing_1 from "../images/landing_1.png";
import landing_2 from "../images/landing_2.jpg";

const Landing_page = () => {
    return (
        <div data-aos="zoom-in" id="home">
            <div  className="hidden lg:block">
                <Image src={landing_1} layout="responsive" alt="logo" className="w-full h-full" />
            </div>
            <div className="block lg:hidden">
                <Image src={landing_2} layout="responsive" alt="logo" className="w-full h-full" />
            </div>
            <div className="h-full w-full bg-[#151515]">
                <div className="container m-auto px-6">
                    <div className="py-5 text-center">
                        <a href="#" target = "_blank" className="rounded-full py-2 px-8 text-2xl font-semibold text-white bg-[#ff8606] hover:bg-[#171717] hover:text-[#ff8606] hover:border-2 hover:border-[#ff8606] inline-block mb-5 uppercase sm:mb-0 ml-6 sm:ml-0 mr-6">Register</a>
                        <a href="#" target = "_blank" className="rounded-full py-2 px-8 text-2xl font-semibold text-[#ff8606] bg-[#171717] hover:bg-[#ff8606] hover:text-white border-2 border-[#ff8606] uppercase inline-block">Brochure</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing_page;