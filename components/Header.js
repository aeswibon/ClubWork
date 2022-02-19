import { useEffect, useState } from "react";
import {Transition} from "@headlessui/react";
import logo from "../images/E-Cell.png";
import Image from "next/image";
import Link from 'next/link';
import { classNames } from "./classNames";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const handleVisibleButton = () => {
        if (window.pageYOffset > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
        return () => {
            window.removeEventListener('scroll', handleVisibleButton);
        }
    }, []);

    return (
        <div className="z-[100] w-full overflow-y-hidden fixed">
            <nav className="bg-[#151515]">
                <div className="max-w-6xl pt-3 mx-auto px-10 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center">
                            <div className="">
                                <Image className="pt-20" src={logo} alt="E-Cell" width={100} height={40}/>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-8 lg:ml-10 flex items-baseline justify-center space-x-6">
                                    <Link href="#home"><a href="#" className=" hover:bg-gray-700 text-[#ff8606] hover:text-white lg:px-3 py-2 rounded-md text-sm lg:text-md font-medium"> Home </a></Link>
                                    <Link href="#about"><a href="#" className=" hover:bg-gray-700 text-[#ff8606] hover:text-white lg:px-3 py-2 rounded-md text-sm lg:text-md font-medium"> About Us </a></Link>
                                    <Link href="#timeline"><a href="#" className=" hover:bg-gray-700 text-[#ff8606] hover:text-white lg:px-3 py-2 rounded-md text-sm lg:text-md font-medium"> Timeline </a></Link>
                                    <Link href="#faq"><a href="#" className=" hover:bg-gray-700 text-[#ff8606] hover:text-white lg:px-3 py-2 rounded-md text-sm lg:text-md font-medium"> FAQs </a></Link>
                                    <Link href="#contact"><a href="#" className="  hover:bg-gray-700 text-[#ff8606] hover:text-white lg:px-3 py-2 rounded-md text-sm lg:text-md font-medium"> Contact Us</a></Link>
                                    <div className={classNames(isVisible ? 'block' : 'hidden', ' flex items-baseline justify-center pl-5 lg:pl-10')}>
                                        <a href="#" target = "_blank" className="-ml-3 bg-[#ff8606] text-white hover:border-2 hover:border-[#ff8606] hover:text-[#ff8606] uppercase hover:bg-[#171717]  px-5 py-1 rounded-full text-sm lg:text-md font-medium"> Register </a>
                                        <a href="#" target="_blank" className=" border-2 border-[#ff8606] hover:bg-[#ff8606] text-[#ff8606] hover:text-white uppercase ml-3 md:ml-6 xl:ml-10 px-3 py-1 rounded-full text-sm lg:text-md font-medium"> Brochure </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 ml-10 pt-2 pb-3 space-y-2 sm:px-3">
                                <Link href="#home"><a href="#" onClick={() => setIsOpen(!isOpen)} className="text-[#ff8606] hover:bg-gray-700 hover:text-[#] block px-3 py-2 rounded-md text-base font-medium"> Home </a></Link>
                                <Link href="#about"><a href="#" onClick={() => setIsOpen(!isOpen)} className="text-[#ff8606] hover:bg-gray-700 hover:text-[#ff8606] block px-3 py-2 rounded-md text-base font-medium"> About Us </a></Link>
                                <Link href="#timeline"><a href="#" onClick={() => setIsOpen(!isOpen)} className="text-[#ff8606] hover:bg-gray-700 hover:text-[#ff8606] block px-3 py-2 rounded-md text-base font-medium"> Timeline </a></Link>
                                <Link href="#faq"><a href="#" onClick={() => setIsOpen(!isOpen)} className="text-[#ff8606] hover:bg-gray-700 hover:text-[#ff8606] block px-3 py-2 rounded-md text-base font-medium"> FAQs </a></Link>
                                <Link href="#contact"><a href="#" onClick={() => setIsOpen(!isOpen)} className="text-[#ff8606] hover:bg-gray-700 hover:text-[#ff8606] block px-3 py-2 rounded-md text-base font-medium"> Contact Us</a></Link>
                                <div className={classNames(isVisible ? 'block' : 'hidden', ' ml-3')}>
                                    <a href="#" target = "_blank" onClick={() => setIsOpen(!isOpen)} className="bg-[#ff8606] text-white hover:text-[#ff8606] px-3 py-2 rounded-md text-sm lg:text-lg font-medium"> Register </a>
                                    <a href="#" target = "_blank" onClick={() => setIsOpen(!isOpen)} className=" bg-[#ff8606] text-white hover:text-[#ff8606] ml-3 xl:ml-10 px-3 py-2 rounded-md text-sm lg:text-lg font-medium"> Brochure </a>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Header;