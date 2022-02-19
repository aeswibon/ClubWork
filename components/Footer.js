import Image from "next/image";
import logo from "../images/E-Cell.png";

const Footer = () => {
    return (
        <div className="w-screen  overflow-y-hide">
            <footer className="text-gray-600 body-font bg-[#222324] lg:px-20">
                <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image src={logo} height={120} width={280} alt="ECELL" />
                        </a>
                        <span className="inline-flex mt-6 md:justify-center sm:justify-start md:px-16">
                            <a className="text-[#ff8605] hover:text-[#3569D8] text-2xl" href="https://m.facebook.com/vnitecell/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="ml-4 text-[#ff8605] hover:text-[#1DA1F2] text-2xl" href="https://twitter.com/ecell_vnit">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="ml-4 text-[#ff8605] insta text-2xl" href="https://www.instagram.com/ecellvnit/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="ml-4 text-[#ff8605] hover:text-[#0077b5] text-2xl" href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="ml-4 text-[#ff8605] hover:text-[#ff0000] text-2xl" href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </span>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 mt-10 md:mt-0 lg:mt-10 text-center text-xl">
                        <div className="lg:w-2/3 md:w-1/2 w-full px-4">
                            <nav className="list-none mb-8">
                                <li>
                                    <p className="text-white">For Queries and Details:
                                    <a className="text-[#ff8605] hover:text-white" href="#"><br/>neo@ecellvnit.org</a>
                                    </p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <p className="text-white text-center">All rights reserved.<br />
                                <a href="https://www.ecellvnit.org/" rel="noopener noreferrer" className="ml-1 text-[#ff8605]" target="_blank">© ECELL VNIT </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;