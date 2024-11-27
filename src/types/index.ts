export interface Dish {
  id: number;
  name: string;
  pinyinName: string;
  price: number;
  spicyLevel: 1 | 2 | 3 | 4 | 5;
  image: string;
  description: string;
  ingredients: string[];
  recipe: string[];
  category: '冷菜' | '热菜' | '川味小炒' | '特色主食';
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  expiryDate: Date;
  isUsed: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  finalTotal: number;
  couponUsed?: Coupon;
  date: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}