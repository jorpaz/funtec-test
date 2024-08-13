import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            rating: 5,
            text: "Slate helps you see how many more days you need to work to reach your financial goal.",
            name: "Regina Miles",
            role: "Designer",
            image: "landing/testimonials/avatar.svg"
        },
        {
            rating: 4,
            text: "Slate helps you see how many more days you need to work to reach your financial goal.",
            name: "Regina Miles",
            role: "Designer",
            image: "landing/testimonials/avatar.svg"
        },
        {
            rating: 4,
            text: "Slate helps you see how many more days you need to work to reach your financial goal.",
            name: "Regina Miles",
            role: "Designer",
            image: "landing/testimonials/avatar.svg"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">What Clients Say</h2>
                <p className="text-gray-600 mt-4 mb-12">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
                    mechanics
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.451a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.451a1 1 0 00-1.176 0l-3.37 2.451c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118l-3.37-2.451c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">{testimonial.text}</p>
                            <div className="flex items-center">
                                <img
                                    className="w-12 h-12 rounded-full mr-4"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="text-left">
                                    <p className="text-gray-800 font-bold">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
