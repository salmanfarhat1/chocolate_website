"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* 🔹 Top nav bar (fixed) */}
      <div className="bg-[#fdfaf5] shadow-sm fixed top-0 left-0 w-full z-50">
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

      {/* 🔹 Add margin so content doesn’t hide under fixed nav */}
      <div className="pt-12">
        {/* Centered Logo section */}
        <div className="bg-white">
          <div className="flex items-center justify-center py-3 space-x-2">
            {/* Logo */}
            <Image src="/icons/logo-2.png" alt="Molded Logo" width={250} height={100} />
          </div>
        </div>

        {/* Background section */}
        <div className="relative w-full h-[9cm]">
          <Image
            src="/chocolate_background.jpg"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Overlay block on the left */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2">
            <div className="bg-white/70 px-6 py-4 rounded-lg shadow-md border border-[#5a2a27] max-w-sm">
              <h2 className="text-lg md:text-xl font-semibold text-[#5a2a27]">
                Artisanal Chocolate with Lebanese Flavours
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
