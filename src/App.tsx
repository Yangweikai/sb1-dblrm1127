import React, { useState, useCallback } from 'react';
import { dishes } from './data/dishes';
import { DishCard } from './components/DishCard';
import { DishDetail } from './components/DishDetail';
import { Cart } from './components/Cart';
import { CouponUpload } from './components/CouponUpload';
import { Search, Flame, UtensilsCrossed } from 'lucide-react';
import type { Dish, CartItem, Coupon, Order } from './types';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const categories = ['全部', ...new Set(dishes.map(dish => dish.category))];

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.pinyinName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || dish.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = useCallback((dish: Dish) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.dish.id === dish.id);
      if (existingItem) {
        return prev.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
    toast.success(`已添加 ${dish.name} 到购物车`);
  }, []);

  const handleUpdateQuantity = useCallback((dishId: number, quantity: number) => {
    setCartItems(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.dish.id !== dishId);
      }
      return prev.map(item =>
        item.dish.id === dishId
          ? { ...item, quantity }
          : item
      );
    });
  }, []);

  const handleRemoveItem = useCallback((dishId: number) => {
    setCartItems(prev => prev.filter(item => item.dish.id !== dishId));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleCouponSuccess = useCallback((couponData: { code: string; discount: number }) => {
    const newCoupon: Coupon = {
      id: Math.random().toString(36).substring(7),
      code: couponData.code,
      discount: couponData.discount,
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7天有效期
      isUsed: false
    };
    setCoupons(prev => [...prev, newCoupon]);
  }, []);

  const handlePlaceOrder = useCallback((couponId?: string) => {
    if (cartItems.length === 0) return;

    const usedCoupon = coupons.find(c => c.id === couponId);
    const total = cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
    const finalTotal = Math.max(0, total - (usedCoupon?.discount || 0));

    const newOrder: Order = {
      id: Math.random().toString(36).substring(7),
      items: [...cartItems],
      total,
      finalTotal,
      couponUsed: usedCoupon,
      date: new Date(),
      status: 'confirmed'
    };

    setOrders(prev => [...prev, newOrder]);
    setCartItems([]);
    
    if (usedCoupon) {
      setCoupons(prev => prev.filter(c => c.id !== couponId));
    }

    toast.success('下单成功！');
  }, [cartItems, coupons]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 to-red-600 text-white py-8 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <UtensilsCrossed size={32} className="text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">小向专属点菜系统</h1>
                <p className="text-red-100 mt-1">精选川味 • 独特风味</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="搜索你想要的美味..."
              className="w-full px-4 py-3 pl-12 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="bg-gray-800 shadow-xl sticky top-0 z-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-4 py-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all transform hover:scale-105
                  ${selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Coupon Upload Section */}
        <div className="mb-8">
          <CouponUpload onSuccess={handleCouponSuccess} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onSelect={setSelectedDish}
            />
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-16">
            <Flame size={48} className="mx-auto text-red-500 mb-4" />
            <p className="text-gray-400 text-lg">没有找到相关菜品</p>
          </div>
        )}
      </main>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <DishDetail
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Shopping Cart */}
      <Cart
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClear={handleClearCart}
        coupons={coupons}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}

export default App;