"use client"; // Only needed if using useState or other client-side logic

import Link from 'next/link'; 
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section className="py-12 bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Get Help</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {/* Card 1 - Contact Number */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-blue-500 text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gray-800">Contact Number</h2>
                    </div>
                    <p className="text-gray-600 font-medium">+91 7265059999</p>
                    <p className="text-gray-600 font-medium mb-5">+91 9274219999</p>

                    <a
                        href="https://wa.link/lsm4ng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
                    > 
                        Message if urgent
                    </a>
                </div>

                {/* Card 2 - Contact Place */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-green-500 text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gray-800">Contact Place</h2>
                    </div>
                    <p className="text-lg text-gray-600 font-medium mb-5">
                        Opp. Madhav Furniture, Near Sangh Petrol Pump, Kodinar, Rajkot
                    </p>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
                    >
                        See Directions on the Map
                    </a>
                </div>

                {/* Card 3 - About My Shop */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                    <div className="flex items-center mb-4">
                        <FaMobileAlt className="text-red-500 text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gray-800">About My Shop</h2>
                    </div>
                    <p className='mb-5'>Read all about my shop, location, contact details, and all products.</p>
                    <Link 
                        href="/contact"
                        className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
                    >
                        About My Shop / Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
