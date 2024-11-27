import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import type { Dish } from '../types';
import { SpicyLevel } from './SpicyLevel';

interface DishDetailProps {
  dish: Dish;
  onClose: () => void;
  onAddToCart: (dish: Dish) => void;
}

export const DishDetail: React.FC<DishDetailProps> = ({ dish, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl">
        <div className="relative">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-72 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 backdrop-blur-sm"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{dish.name}</h2>
              <p className="text-gray-400">{dish.pinyinName}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-red-500 mb-1">¥{dish.price}</p>
              <SpicyLevel level={dish.spicyLevel} />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-white">描述</h3>
            <p className="text-gray-400">{dish.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">主料</h3>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-red-500/10 text-red-400 px-4 py-1.5 rounded-lg text-sm border border-red-500/20"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">制作步骤</h3>
            <ol className="space-y-3">
              {dish.recipe.map((step, index) => (
                <li key={index} className="text-gray-400 flex gap-3">
                  <span className="text-red-500 font-bold">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <button
            onClick={() => {
              onAddToCart(dish);
              onClose();
            }}
            className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
          >
            <ShoppingCart size={20} />
            添加到购物车
          </button>
        </div>
      </div>
    </div>
  );
};