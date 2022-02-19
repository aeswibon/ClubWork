const FAQ = () => {
    return (
        <div id="faq">
            <section className="text-gray-700 bg-[#151515] pt-[108px] pb-2 px-5 ">
                <div className="container px-5 py-16 mx-auto rounded-lg mb-24 border-2 border-[#ff8605]">
                    <div data-aos="fade-up" className="text-center mb-16">
                        <h1 className="text-4xl lg:text-6xl font-medium text-center title-font text-[#ff8605] mb-4">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div data-aos="fade-up" className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Why Should I Participate in NEO?</summary>
                                <span className="text-white">NEO will help you develop Analytical Mindset, Logical Reasoning, Entrepreneurial Mindset, Communication Skills, Knowledge of Finances, Marketing, Startups</span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">How Will NEO Be Conducted Amidst The Pandemic?</summary>
                                <span className="text-white">All the rounds of NEO will be conducted online. The platform for the same will be conveyed to the participants on your registered email ids and Whatsapp Contact numbers.</span>
                            </details>
                            <details className="mb-4 lg:mb-0">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4"> What are the eligibility criteria?</summary>
                                <span className="text-white">Students of Class 7th, 8th, 9th, and 10th are eligible</span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">What are the registration fees?</summary>
                                <span className="text-white">INR 100</span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">How can one study for the examination?</summary>
                                <span className="text-white">Study material will be provided after the registration of the participant.</span>
                            </details>
                            <details className="">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">On what basis will the papers be checked for students of Class 7th, 8th, 9th and 10th?</summary>
                                <span className="text-white">The evaluation criteria will take into consideration the class of the student. The papers would be fairly evaluated based on that. Students of all these classes will be considered in the selection for further rounds.</span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;