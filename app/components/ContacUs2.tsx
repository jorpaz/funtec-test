import React from 'react';

const ContactUs2: React.FC = () => {
    return (
        <section className="bg-gray-50 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Request A Free Consultation</h3>
                    <p className="text-gray-600 mt-2">the quick fox jumps over the lazy dog</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="bg-brown-500 text-white py-4 px-6 rounded-lg hover:bg-brown-600 transition" style={{backgroundColor: '#784F33'}}>
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs2;
