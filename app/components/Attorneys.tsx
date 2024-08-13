import React from 'react';

type Attorney = {
    name: string;
    role: string;
    image: string;
    social: {
        facebook: string;
        instagram: string;
        twitter: string;
    };
};

const attorneys: Attorney[] = [
    {
        name: 'Ashley Fletcher',
        role: 'LAYER & CEO',
        image: 'landing/attorneys/avatar1.svg',
        social: {
            facebook: '#',
            instagram: '#',
            twitter: '#',
        },
    },
    {
        name: 'Rodney Stratton',
        role: 'CEO',
        image: 'landing/attorneys/avatar2.svg',
        social: {
            facebook: '#',
            instagram: '#',
            twitter: '#',
        },
    },
    {
        name: 'Avie Beaton',
        role: 'LAYER CIVIL LAW',
        image: 'landing/attorneys/avatar3.svg',
        social: {
            facebook: '#',
            instagram: '#',
            twitter: '#',
        },
    },
];

const Attorneys: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Meet Our Attorneys</h2>
                <p className="text-gray-600 mt-4 mb-12">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
                    mechanics
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {attorneys.map((attorney, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={attorney.image}
                                alt={attorney.name}
                                className="w-full h-56 object-cover sm:h-64"
                            />
                            <div className="p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{attorney.name}</h3>
                                <p className="text-gray-600 mb-4">{attorney.role}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={attorney.social.facebook} className="text-gray-500 hover:text-gray-800">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.66 8.84 8.36 9.7v-6.86h-2.5v-2.84h2.5v-2.14c0-2.5 1.5-3.88 3.77-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.78-1.62 1.57v1.79h2.78l-.44 2.84h-2.34v6.86C18.34 20.84 22 16.84 22 12z"/>
                                        </svg>
                                    </a>
                                    <a href={attorney.social.instagram} className="text-gray-500 hover:text-gray-800">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                d="M12 2.2c3.2 0 3.6.01 4.9.07 1.2.05 2 .23 2.5.5a4.7 4.7 0 011.65 1.65c.28.5.45 1.3.5 2.5.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.05 1.2-.23 2-.5 2.5a4.7 4.7 0 01-1.65 1.65c-.5.28-1.3.45-2.5.5-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.2-.05-2-.23-2.5-.5a4.7 4.7 0 01-1.65-1.65c-.28-.5-.45-1.3-.5-2.5-.06-1.3-.07-1.7-.07-4.9s.01-3.6.07-4.9c.05-1.2.23-2 .5-2.5a4.7 4.7 0 011.65-1.65c.5-.28 1.3-.45 2.5-.5 1.3-.06 1.7-.07 4.9-.07m0-2.2c-3.3 0-3.7.01-5 .08-1.3.06-2.3.27-3.2.58a7.1 7.1 0 00-2.6 1.7 7.1 7.1 0 00-1.7 2.6c-.3.9-.52 1.9-.58 3.2-.07 1.3-.08 1.7-.08 5s.01 3.7.08 5c.06 1.3.27 2.3.58 3.2a7.1 7.1 0 001.7 2.6 7.1 7.1 0 002.6 1.7c.9.3 1.9.52 3.2.58 1.3.07 1.7.08 5 .08s3.7-.01 5-.08c1.3-.06 2.3-.27 3.2-.58a7.1 7.1 0 002.6-1.7 7.1 7.1 0 001.7-2.6c.3-.9.52-1.9.58-3.2.07-1.3.08-1.7.08-5s-.01-3.7-.08-5c-.06-1.3-.27-2.3-.58-3.2a7.1 7.1 0 00-1.7-2.6 7.1 7.1 0 00-2.6-1.7c-.9-.3-1.9-.52-3.2-.58-1.3-.07-1.7-.08-5-.08zM12 7.4a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm0 7.6a3 3 0 110-6 3 3 0 010 6zm6.3-10.6a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
                                        </svg>
                                    </a>
                                    <a href={attorney.social.twitter} className="text-gray-500 hover:text-gray-800">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                d="M23 2.999c-.8.35-1.7.58-2.6.68a4.55 4.55 0 001.9-2.5c-.9.5-1.9.88-3 1.1a4.52 4.52 0 00-7.7 4.13A12.8 12.8 0 012.6 2.89 4.52 4.52 0 003 7.5a4.5 4.5 0 01-2-.54v.06a4.52 4.52 0 003.63 4.42 4.5 4.5 0 01-2 .08 4.52 4.52 0 004.22 3.12 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.07-.07a12.78 12.78 0 006.92 2.03c8.32 0 12.87-6.9 12.87-12.87 0-.2 0-.4-.02-.6A9.22 9.22 0 0023 2.999z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Attorneys;
