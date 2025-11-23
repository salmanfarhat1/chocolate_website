'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

type ChocolateCardProps = {
  id: number;
  name: string;
  ingredients: string;
  photoUrl: string | null;
  brand?: string;
  price?: number;
  quantity?: string;
  showAddToCart?: boolean;
  isClickable?: boolean; // Add this line
};

export default function ChocolateCard({
  id,
  name,
  ingredients,
  photoUrl,
  brand = "Bestseller",
  price = 45,
  quantity = "12 pieces",
  showAddToCart = true,
  isClickable = false, // Add this line with default value
}: ChocolateCardProps) {
  const { addItem, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if card is clickable
    e.stopPropagation();
    
    addItem({
      id: `chocolate-${id}`,
      name,
      price,
      image: photoUrl || undefined,
      type: 'ready-made',
    });
  };

  const cardContent = (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02] cursor-pointer border border-[#f0e6d6]">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#f0e6d6] to-[#e8d5c4] flex items-center justify-center">
            <div className="text-4xl">🍫</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand/Collection Name */}
        <div className="text-sm font-medium text-[#8b7355] uppercase tracking-wide mb-1">
          {brand}
        </div>
        
        {/* Chocolate Name */}
        <h2 className="text-xl font-bold text-[#5a2a27] mb-3 line-clamp-1">
          {name}
        </h2>
        
        {/* Description */}
        <p className="text-[#7a5a53] text-sm mb-4 line-clamp-2">
          {ingredients}
        </p>
        
        {/* Price and Quantity */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-[#5a2a27]">
            ${price}
          </span>
          <span className="text-sm text-[#7a5a53]">
            {quantity}
          </span>
        </div>
        
        {/* Add to Cart Button or Discover Link */}
        {showAddToCart ? (
          <button 
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-lg transition-colors duration-300 font-medium ${
              isInCart(`chocolate-${id}`)
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-[#5a2a27] text-white hover:bg-[#6a3a37]'
            }`}
          >
            {isInCart(`chocolate-${id}`) ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        ) : (
          <div className="flex justify-between items-center">
            <span className="text-[#5a2a27] font-semibold text-lg">
              Discover →
            </span>
            <div className="w-2 h-2 bg-[#5a2a27] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
      </div>
    </div>
  );

  // If card is clickable, wrap it with a Link
  if (isClickable) {
    return (
      <Link href={`/chocolates/${id}`}>
        {cardContent}
      </Link>
    );
  }

  // Otherwise return just the card content
  return cardContent;
}