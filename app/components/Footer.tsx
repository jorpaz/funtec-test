import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#252B42] text-white pt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div className="mb-8 lg:mb-0">
                    <h2 className="font-bold text-lg">Litigade</h2>
                </div>
                <div className="mb-8 lg:mb-0">
                    <h3 className="font-semibold mb-4">Company Info</h3>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Carrier</a></li>
                        <li><a href="#" className="hover:text-gray-400">We are hiring</a></li>
                        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Carrier</a></li>
                        <li><a href="#" className="hover:text-gray-400">We are hiring</a></li>
                        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <h3 className="font-semibold mb-4">Features</h3>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400">Business Marketing</a></li>
                        <li><a href="#" className="hover:text-gray-400">User Analytic</a></li>
                        <li><a href="#" className="hover:text-gray-400">Live Chat</a></li>
                        <li><a href="#" className="hover:text-gray-400">Unlimited Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400">IOS & Android</a></li>
                        <li><a href="#" className="hover:text-gray-400">Watch a Demo</a></li>
                        <li><a href="#" className="hover:text-gray-400">Customers</a></li>
                        <li><a href="#" className="hover:text-gray-400">API</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Get In Touch</h3>
                    <form className="flex flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-2 mb-2 sm:mb-0 sm:mr-2 rounded-md text-gray-900"
                        />
                        <button className="bg-[#FFC107] text-black p-2 rounded-md hover:bg-yellow-500">
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-2 text-sm text-gray-400">Lorem ipsum dolor amit</p>
                </div>
            </div>
            <div className="bg-[#295C7A] text-center py-4 mt-10">
                <p className="text-sm">Made With Love By Jorge Paz</p>
            </div>
        </footer>
    );
};

export default Footer;
