import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div className="mb-6 lg:mb-0">
                        <h4 className="text-xl font-semibold mb-4">Litigade</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 w-full lg:w-auto">
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Company Info</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Carrier</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">We are hiring</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Legal</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Carrier</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">We are hiring</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Features</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Business Marketing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">User Analytic</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Live Chat</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Unlimited Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Resources</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">iOS & Android</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Watch a Demo</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Customers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Get In Touch</h5>
                            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="p-3 w-full rounded-lg bg-gray-800 text-white border border-gray-700"
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-gray-900 p-3 rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-gray-400 mt-2">Lorem ipsum dolor amit</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-t border-gray-800 mt-8 pt-6 text-center" style={{ backgroundColor: '#295C7A' }}>
                    <p className="text-gray-400">Made With Love By Jorge Paz</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
