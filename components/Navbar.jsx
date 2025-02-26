"use client"
import React, { useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const{openSignIn} = useClerk();
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      {/* Search Bar 
      <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="border px-3 py-1.5 rounded-full text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button type="submit" className="absolute right-3">
          <Image className="w-5 h-5" src={assets.search_icon} alt="search icon" />
        </button>
      </form>*/}

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user 
        ? 
        <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={() => router.push('/cart')}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={() => router.push('/my-orders')}/>
          </UserButton.MenuItems>
        </UserButton>
        </> 
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {user 
        ? 
        <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Home" labelIcon={<HomeIcon/>} onClick={() => router.push('/')}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Product" labelIcon={<BoxIcon/>} onClick={() => router.push('/product')}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={() => router.push('/cart')}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={() => router.push('/my-orders')}/>
          </UserButton.MenuItems>
        </UserButton>
        </> 
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </div>
    </nav>
  );
};

export default Navbar;