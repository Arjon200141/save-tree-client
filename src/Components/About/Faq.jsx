import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is Save Tree Foundation?",
            answer: "Save Tree Foundation is a non-profit organization dedicated to conserving nature and empowering youth through tree plantations, education, and community outreach."
        },
        {
            question: "What is your slogan?",
            answer: "Our slogan is: 'Save Trees For Our Next Generation!'"
        },
        {
            question: "How does Save Tree Foundation make an impact?",
            answer: "We plant trees, educate young minds about environmental conservation, and engage communities through outreach programs to promote a sustainable lifestyle."
        },
        {
            question: "Where does my donation go?",
            answer: "Your donation supports tree plantation drives, youth environmental education, and community green outreach programs."
        },
        {
            question: "How can I donate to your foundation?",
            answer: "You can donate directly through our website using secure payment methods. Every contribution helps plant hope for a greener future."
        },
        {
            question: "Is my donation tax-deductible?",
            answer: "Yes, we provide tax receipts for all eligible donations as per local tax laws."
        },
        {
            question: "Can I volunteer with Save Tree Foundation?",
            answer: "Absolutely! We welcome volunteers for tree plantation events, awareness campaigns, and educational workshops."
        },
        {
            question: "Who can volunteer?",
            answer: "Anyone with a passion for nature and community work—students, professionals, families—can volunteer with us."
        },
        {
            question: "Do you organize tree plantation events regularly?",
            answer: "Yes, we organize seasonal and region-specific tree plantation drives and invite the public to participate."
        },
        {
            question: "How are youth involved in your programs?",
            answer: "We conduct eco-education sessions in schools and colleges and provide platforms for youth-led green initiatives."
        },
        {
            question: "Can schools or colleges collaborate with you?",
            answer: "Yes, we offer collaboration opportunities for eco-clubs, awareness programs, tree planting events, and internships."
        },
        {
            question: "How can I get updates about your activities?",
            answer: "Subscribe to our newsletter or follow us on social media to stay informed about our latest events, drives, and success stories."
        },
        {
            question: "Can I sponsor a tree in someone's name?",
            answer: "Yes! You can dedicate a tree in someone's name as a gift, memorial, or celebration—it's a meaningful gesture for any occasion."
        },
        {
            question: "Do you offer corporate partnership programs?",
            answer: "Yes, we welcome CSR collaborations with businesses that are committed to environmental responsibility."
        },
        {
            question: "What types of trees do you plant?",
            answer: "We plant native and climate-resilient tree species that suit the local ecosystem and benefit biodiversity."
        },
        {
            question: "Why is saving trees so important?",
            answer: "Trees purify air, combat climate change, support wildlife, and protect soil and water. They're essential for a healthy planet and future generations."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2a7d2e] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Everything you need to know about our green initiatives and how you can contribute.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-[#339634] rounded-full"></div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-10 mx-12">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <div 
                                className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
                            >
                                <button
                                    className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-300 ${activeIndex === index ? 'bg-[#339634] text-white' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="font-semibold text-lg">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-100">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-white mb-6">Still have questions? We're here to help!</p>
                    <button className="px-8 py-3 bg-[#339634] text-white text-lg font-medium rounded-full hover:bg-[#2a7d2e] transition-colors duration-300 shadow-md hover:shadow-lg">
                        Contact Us
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Faq;