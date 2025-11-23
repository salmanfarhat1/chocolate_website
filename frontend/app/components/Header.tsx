import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-[#e8d5c4]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            {/* Replace with your logo - using text for now */}
            <div className="text-2xl font-bold text-[#5a2a27]">
              Chocolate Shop
            </div>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              href="/chocolates" 
              className="text-[#5a2a27] hover:text-[#7a5a53] transition-colors font-medium"
            >
              Collections
            </Link>
            <Link 
              href="/create-chocolate" 
              className="text-[#5a2a27] hover:text-[#7a5a53] transition-colors font-medium"
            >
              Custom Chocolate
            </Link>
            <CartIcon />
          </nav>
        </div>
      </div>
    </header>
  );
}