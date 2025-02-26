import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLocationOn, MdPeople } from 'react-icons/md';
import { RiCustomerService2Fill } from "react-icons/ri";


const HomePageContact = () => {
  const services = [
    {
      icon: <RiCustomerService2Fill className="text-3xl text-green-600" />,
      heading: 'Argent Service 24*7',
      description: 'if emergency then contact any time',
      link: <Link href='/about' className="border-4 p-2 rounded-lg border-blue-500 text-cyan-950 hover:text-green-600">Get-Help</Link>,
    },
    {
      icon: <MdLocationOn className="text-3xl text-red-500" />,
      heading: 'Location Shop',
      description: 'Rajkot,Kodinar,near sangh petrol pump',
      link: <Link href="/" className="border-4 p-2 rounded-lg border-blue-500 text-cyan-950 hover:text-green-600">View Locations</Link>,
    },
    {
      icon: <MdPeople className="text-3xl text-blue-600" />,
      heading: 'Trusted Users 500+',
      description: 'As of today, we have 500+ happy users and a rating of 4+ out of 5.',
      link: <Link href="/contact" className="border-4 p-2 rounded-lg border-blue-500 text-cyan-950 hover:text-green-600">aboutShop</Link>,
    },
  ];

  return (
    <section className="py-8 bg-gray-100 mt-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Shop & Owner</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}  // Using index as key (use a unique identifier if available)
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 shadow-md mr-3">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{service.heading}</h2>
            </div>
            <p className="text-gray-600 font-medium mb-4">{service.description}</p>
            {service.link && (
              <div className="mt-2">
                {service.link}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePageContact;
