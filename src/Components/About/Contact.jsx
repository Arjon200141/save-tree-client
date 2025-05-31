import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
    return (
        <div className="my-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2a7d2e] mb-4">Get In Touch</h2>
                <p className="text-white max-w-2xl mx-auto">Have questions or want to collaborate? Reach out to us and we'll get back to you as soon as possible.</p>
            </div>

            <div className="flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden mx-0 sm:mx-4">
                {/* Left Side - Contact Info */}
                <div className="bg-gradient-to-br from-[#2a7d2e] to-[#1a5a1e] text-white p-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>

                    <div className="space-y-5 mb-8">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="mt-1 mr-4 text-xl text-white/80" />
                            <div>
                                <h4 className="font-semibold">Our Address</h4>
                                <p className="text-white/90">Tree Foundation, House#56
                                    Road #8B, Block #H, Banani
                                    Dhaka 1234, Bangladesh</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaEnvelope className="mt-1 mr-4 text-xl text-white/80" />
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-white/90">info@tree.com.bd</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaPhoneAlt className="mt-1 mr-4 text-xl text-white/80" />
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <p className="text-white/90">+880 1234567890</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-3">
                            <a href="#" className='text-xl bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300'>
                                <FaFacebookF />
                            </a>
                            <a href="#" className='text-xl bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300'>
                                <FaTwitter />
                            </a>
                            <a href="#" className='text-xl bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300'>
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className='text-xl bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300'>
                                <FaYoutube />
                            </a>
                            <a href="#" className='text-xl bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300'>
                                <FiInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-white p-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2a7d2e] focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2a7d2e] focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Your phone number"
                                    className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2a7d2e] focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your message here..."
                                rows="5"
                                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2a7d2e] focus:border-transparent transition-all"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#2a7d2e] to-[#1a5a1e] text-white px-8 py-4 rounded-lg hover:opacity-90 transition duration-300 font-semibold shadow-md hover:shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;