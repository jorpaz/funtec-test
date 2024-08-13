import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <section className="bg-gray-50 py-12 max-w-full" style={{backgroundImage: "url('landing/contactusbg.svg')"}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <h3 className="text-sm text-gray-600 uppercase">Contact Us</h3>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Make an Appointment</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <select className="w-full p-3 border border-gray-300 rounded-lg">
                                <option value="">Please Select</option>
                                {/* Add your options here */}
                            </select>
                            <select className="w-full p-3 border border-gray-300 rounded-lg">
                                <option value="">4:00 Available</option>
                                {/* Add your options here */}
                            </select>
                        </div>
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 border border-gray-300 rounded-lg h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-brown-500 text-white p-3 rounded-lg hover:bg-brown-600 transition max-w-[280px]"
                            style={{backgroundColor: '#784F33'}}>
                            Book Appointment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
