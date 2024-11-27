import React from 'react';
import { Flame } from 'lucide-react';

interface SpicyLevelProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export const SpicyLevel: React.FC<SpicyLevelProps> = ({ level }) => {
  return (
    <div className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded-lg">
      {[...Array(5)].map((_, index) => (
        <Flame
          key={index}
          size={14}
          className={index < level 
            ? 'text-red-500 drop-shadow-glow' 
            : 'text-gray-600'
          }
        />
      ))}
    </div>
  );
};