"use client";
import React, { useState } from 'react';

const Hero: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        time: ''
    });

    const savedData = localStorage.getItem('appointmentData');
    const savedTime = savedData ? JSON.parse(savedData).time : null;

    const availableTimes = ['8:00', '10:00', '2:00', '4:00', '5:00', '6:00'].filter(time => time !== savedTime);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // guarda los datos en localStorage
        localStorage.setItem('appointmentData', JSON.stringify(formData));
        setFormData({
            name: '',
            email: '',
            department: '',
            time: ''
        });
        alert('Datos guardados en localStorage');
    };

    return (
        <header className="bg-cover bg-center" style={{ backgroundImage: "url('landing/cover1-main.svg')" }}>
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div className="text-2xl font-bold text-gray-800">Litigade</div>
                <nav className="hidden md:flex space-x-6 text-gray-600">
                    <a href="#home" className="hover:text-gray-800">Home</a>
                    <a href="#product" className="hover:text-gray-800">Product</a>
                    <a href="#pricing" className="hover:text-gray-800">Pricing</a>
                    <a href="#contact" className="hover:text-gray-800">Contact</a>
                </nav>
                <button className="md:hidden flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </button>
            </div>

            <section>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-8">
                    <div className="text-left md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Help to reclaim your <br/> life and freedom
                        </h1>
                        <p className="text-gray-600 mt-4">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-[#784F33] text-white px-6 py-2 rounded-3xl w-full sm:w-auto">
                                Get Quote Now
                            </button>
                            <button className="border text-brown-600 px-6 py-2 rounded-3xl w-full sm:w-auto" style={{ border: 'solid 1px #784F33' }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3 mt-8 md:mt-0 max-w-full md:max-w-xs">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 py-4">Book Appointment</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Department*</label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600"
                                    required
                                >
                                    <option value="">Please Select</option>
                                    <option value="legal">Legal</option>
                                    <option value="financial">Financial</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Time*</label>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600"
                                    required
                                >
                                    {availableTimes.map(time => (
                                        <option key={time} value={time}>{time} Available</option>
                                    ))}
                                </select>
                            </div>
                            <button className="bg-brown-600 text-white w-full py-4 rounded-md" style={{ backgroundColor: '#295C7A' }}>Book Appointment</button>
                        </form>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
