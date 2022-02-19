const About = () => {
    return (
        <div id="about" className="overflow-hidden pt-16 bg-[#171717]">
            <div data-aos="fade-right" className="container mx-auto my-10 bg-white md:bg-[#171717] rounded-lg">
                <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl lg:shadow-none md:h-72 mx-2">
                    <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                        <div className="absolute inset-0 w-full h-6/12 object-center bg-opacity-30 bg-contain bg-no-repeat bg-center ecell_logo_white md:ecell_logo_black"></div>
                        <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                            <h3 className="w-full font-bold text-4xl text-white leading-tight mb-2">ECELL VNIT</h3>
                        </div>
                        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-[#171717] -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                    <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0 ">
                        <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none bg-white md:bg-[#171717]">
                            <h3 className="hidden md:block font-bold text-xl xl:text-2xl md:text-white text-[#171717]">ECELL VNIT</h3>
                            <p className="md:text-white text-[#171717] text-justify">E-Cell VNIT is the entrepreneurship cell of VNIT. The very purpose of E-Cell is to foster a community of entrepreneurs and stimulate a constructive ecosystem for them. Throughout the year E-cell organizes events that promote managerial values among budding students across the country.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="container mx-auto my-5 bg-white md:bg-[#171717] rounded-lg">
                <div className="relative rounded-lg flex flex-col md:flex-row-reverse items-center md:shadow-xl lg:shadow-none md:h-[400px] xl:h-72 mx-2">
                    <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                        <div className="absolute inset-0 w-full h-6/12 object-center bg-opacity-30 bg-contain bg-no-repeat bg-center neo_logo_white md:neo_logo_black"></div>
                        <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                            <h3 className="w-full font-bold text-4xl text-white leading-tight mb-2">NEO</h3>
                        </div>
                        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-[#171717] -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                    <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                        <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none bg-white md:bg-[#171717]">
                            <h3 className="hidden md:block font-bold text-xl xl:text-2xl md:text-white text-[#171717]">National Entrepreneurship Olympiad (NEO)</h3>
                            <p className="md:text-white text-[#171717] text-justify ">Young minds are less biased and have higher risk-taking capabilities&quot;<br />
                                Let us nurture them in the right direction. With this motive, National Entrepreneurship Olympiad was launched in the year 2018 aiming at fostering the growth of students and building an entrepreneurial mindset. It will provide students with the requisite exposure which is otherwise unavailable to school students. NEO is hence synonymous with a ladder that will help students enlighten them in an unexplored domain of startups and entrepreneurship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;