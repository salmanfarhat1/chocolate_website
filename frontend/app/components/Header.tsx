"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* 🔹 Top nav bar */}
      <div className="bg-[#fdfaf5] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Nav Links (left) */}
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-[#5a2a27] hover:text-[#a35a53] text-sm font-medium">
              Home
            </Link>
            <Link href="/eshop" className="text-[#5a2a27] hover:text-[#a35a53] text-sm font-medium">
              E-Shop
            </Link>
          </nav>

          {/* Icons (right) */}
          <div className="flex items-center space-x-3">
            <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
            <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} />
            <Link href="/signin">
              <Image src="/icons/user.svg" alt="Sign In" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Centered Logo section */}
        <div className="bg-white">
            <div className="flex items-center justify-center py-3 space-x-2">
            {/* Logo */}
                <Image src="/icons/logo.svg" alt="Molded Logo" width={70} height={30} />

                {/* Wordmark beside logo */}
                <span className="text-2xl font-serif italic text-[#5a2a27] tracking-wide">
                moulé
                </span>
            </div>
        </div>


      {/* 🔹 Hero strip with background */}
      <div className="relative h-[220px]">
        {/* Background image */}
        <Image
          src="/chocolate_background.jpg"
          alt="Chocolate Background"
          fill
          className="object-cover"
        />

        {/* Overlay block */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/70 px-8 py-6 rounded-lg shadow-md border border-[#5a2a27]">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#5a2a27] text-center">
                Artisanal Chocolate with Lebanese Flavours
                </h2>
            </div>
        </div>

      </div>
    </header>
  );
}
