import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Accurate Distributor is a one-stop shop for a wide
            range of medical supplies and equipment. Located in Kodinar, India,
            they offer a comprehensive selection of products, including surgical
            instruments, healthcare products, rapid cards, orthocare products,
            and laboratory supplies.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Importent Pages</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/about">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="contact">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/all-products">Products</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">If You want to Register your shop contact </h2>
            <div className="text-sm space-y-2">
              <p>+91 92742 19999</p>
              <p>Rajkot,Kodinar,near sangh petrol pump</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025-2027 © accurateDistributor All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;