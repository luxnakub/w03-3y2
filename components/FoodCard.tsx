// components/FoodCard.tsx
import React from "react";

export interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

type FoodCardProps = {
  food: FoodItem;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-5 mb-5 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full sm:w-52 h-40 object-cover rounded-xl shrink-0"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
              {food.category}
            </span>
            <span className="text-lg font-bold text-emerald-600">
              ฿{food.price}
            </span>
          </div>
          <h2 className="text-xl font-bold text-zinc-900 mb-1">
            {food.name}
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {food.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;