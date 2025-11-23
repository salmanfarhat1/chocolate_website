'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';

type ChocolateBase = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Ingredient = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const chocolateBases: ChocolateBase[] = [
  { id: 'dark', name: 'Dark Chocolate', description: '70% Cacao', price: 8 },
  { id: 'milk', name: 'Milk Chocolate', description: 'Belgian Milk', price: 7 },
  { id: 'white', name: 'White Chocolate', description: 'Premium Vanilla', price: 9 },
];

const ingredients: Ingredient[] = [
  { id: 'banana', name: 'Banana', image: '/icons/banana.png', price: 2 },
  { id: 'fraise', name: 'Strawberry', image: '/icons/fraise.png', price: 3 },
  { id: 'hazelnut', name: 'Hazelnut', image: '/icons/hazelnut.png', price: 4 },
];

export default function CustomChocolateCreator() {
  const [selectedBase, setSelectedBase] = useState<ChocolateBase | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);

  const handleIngredientToggle = (ingredient: Ingredient) => {
    setSelectedIngredients(prev => {
      const isSelected = prev.some(ing => ing.id === ingredient.id);
      
      if (isSelected) {
        return prev.filter(ing => ing.id !== ingredient.id);
      } else {
        if (prev.length >= 3) {
          return prev; // Max 3 ingredients
        }
        return [...prev, ingredient];
      }
    });
  };

  const totalPrice = (selectedBase?.price || 0) + 
    selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Customization */}
        <div className="space-y-8">
          {/* Chocolate Base Selection */}
          <div>
            <h2 className="text-2xl font-bold text-[#5a2a27] mb-6">Choose Your Chocolate Base</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chocolateBases.map((base) => (
                <button
                  key={base.id}
                  onClick={() => setSelectedBase(base)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                    selectedBase?.id === base.id
                      ? 'border-[#5a2a27] bg-[#fdfaf5] shadow-lg'
                      : 'border-[#e8d5c4] bg-white hover:shadow-md'
                  }`}
                >
                  <h3 className="font-bold text-lg text-[#5a2a27] mb-2">
                    {base.name}
                  </h3>
                  <p className="text-[#7a5a53] text-sm mb-3">
                    {base.description}
                  </p>
                  <div className="text-[#5a2a27] font-semibold">
                    ${base.price}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients Selection */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#5a2a27]">Select Your Ingredients</h2>
              <span className="text-lg text-[#7a5a53]">
                {selectedIngredients.length} / 3 selected
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {ingredients.map((ingredient) => {
                const isSelected = selectedIngredients.some(ing => ing.id === ingredient.id);
                const isDisabled = !isSelected && selectedIngredients.length >= 3;

                return (
                  <button
                    key={ingredient.id}
                    onClick={() => handleIngredientToggle(ingredient)}
                    disabled={isDisabled}
                    className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-[#5a2a27] bg-[#fdfaf5]'
                        : isDisabled
                        ? 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                        : 'border-[#e8d5c4] bg-white hover:border-[#5a2a27]'
                    }`}
                  >
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <img
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-medium text-[#5a2a27] text-sm text-center mb-1">
                      {ingredient.name}
                    </span>
                    <span className="text-xs text-[#7a5a53]">
                      +${ingredient.price}
                    </span>
                    {isSelected && (
                      <div className="mt-2 w-4 h-4 bg-[#5a2a27] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Preview & Summary */}
        <div className="space-y-6">
          {/* Product Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e8d5c4]">
            <h2 className="text-2xl font-bold text-[#5a2a27] mb-6 text-center">
              Your Custom Chocolate Bar
            </h2>
            
            <div className="flex flex-col items-center mb-6">
              <div className="w-48 h-48 bg-gradient-to-br from-[#f0e6d6] to-[#e8d5c4] rounded-2xl flex items-center justify-center mb-4 relative">
                <div className="text-4xl">🍫</div>
                
                {/* Display selected ingredients as small icons on the chocolate */}
                {selectedIngredients.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedIngredients.map((ingredient, index) => (
                        <div
                          key={ingredient.id}
                          className="w-8 h-8 bg-white rounded-full p-1 shadow-sm"
                          style={{
                            position: 'absolute',
                            top: `${20 + (index * 25)}%`,
                            left: `${30 + (index * 20)}%`,
                          }}
                        >
                          <img
                            src={ingredient.image}
                            alt={ingredient.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-[#5a2a27] mb-2">
                {selectedBase ? `${selectedBase.name} Bar` : 'Custom Chocolate Bar'}
              </h3>
              
              {selectedBase && (
                <p className="text-[#7a5a53] text-sm text-center">
                  {selectedBase.description}
                </p>
              )}
            </div>

            {/* Selected Items */}
            <div className="space-y-4">
              {selectedBase && (
                <div className="flex justify-between items-center p-3 bg-[#fdfaf5] rounded-lg">
                  <div>
                    <div className="font-medium text-[#5a2a27]">{selectedBase.name}</div>
                    <div className="text-sm text-[#7a5a53]">{selectedBase.description}</div>
                  </div>
                  <div className="text-[#5a2a27] font-semibold">${selectedBase.price}</div>
                </div>
              )}
              
              {selectedIngredients.map(ingredient => (
                <div key={ingredient.id} className="flex justify-between items-center p-3 bg-[#fdfaf5] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8">
                      <img
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-medium text-[#5a2a27]">{ingredient.name}</span>
                  </div>
                  <div className="text-[#5a2a27] font-semibold">+${ingredient.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary & Add to Cart */}
          <div className="bg-[#fdfaf5] rounded-2xl p-6 border border-[#e8d5c4]">
            <h3 className="font-semibold text-[#5a2a27] mb-4 text-lg">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              {selectedBase && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#7a5a53]">Chocolate Base</span>
                  <span className="text-[#5a2a27]">${selectedBase.price}</span>
                </div>
              )}
              
              {selectedIngredients.map(ingredient => (
                <div key={ingredient.id} className="flex justify-between text-sm">
                  <span className="text-[#7a5a53]">+ {ingredient.name}</span>
                  <span className="text-[#5a2a27]">${ingredient.price}</span>
                </div>
              ))}
              
              <div className="border-t border-[#e8d5c4] pt-3 mt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-[#5a2a27]">Total</span>
                  <span className="text-[#5a2a27]">${totalPrice}</span>
                </div>
              </div>
            </div>

            <button 
              disabled={!selectedBase}
              className="w-full bg-[#5a2a27] text-white py-4 rounded-lg hover:bg-[#6a3a37] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
            >
              {selectedBase ? `Add to Cart - $${totalPrice}` : 'Select a Chocolate Base'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}