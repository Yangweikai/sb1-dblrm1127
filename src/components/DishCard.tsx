import React from 'react';
import { SpicyLevel } from './SpicyLevel';
import type { Dish } from '../data/dishes';
import { ChevronRight } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelect }) => {
  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-700"
      onClick={() => onSelect(dish)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
          ¥{dish.price}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{dish.name}</h3>
            <p className="text-sm text-gray-400">{dish.pinyinName}</p>
          </div>
          <SpicyLevel level={dish.spicyLevel} />
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-red-500 font-semibold bg-red-500/10 px-3 py-1 rounded-lg">
            {dish.category}
          </span>
          <ChevronRight className="text-gray-500" size={20} />
        </div>
      </div>
    </div>
  );
};