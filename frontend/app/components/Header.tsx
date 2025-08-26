"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#5a2a27]">
          Molded
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          <Link href="#" className="text-[#5a2a27] hover:text-[#a35a53]">
            Home
          </Link>
          <Link href="#" className="text-[#5a2a27] hover:text-[#a35a53]">
            E-Shop
          </Link>
          
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
          <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
          <Link href="/signin">
            <Image src="/icons/user.svg" alt="Sign In" width={24} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
