import React, { useState } from 'react';
import { ShoppingCart, Trash2, X, Heart } from 'lucide-react';
import type { CartItem, Coupon } from '../types';
import toast from 'react-hot-toast';
import { useSpring, animated } from 'react-spring';
import { sendQQNotification } from '../utils/qqNotification';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (dishId: number, quantity: number) => void;
  onRemoveItem: (dishId: number) => void;
  onClear: () => void;
  coupons: Coupon[];
  onPlaceOrder: (couponId?: string) => void;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClear,
  coupons,
  onPlaceOrder
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCouponId, setSelectedCouponId] = useState<string>();

  const total = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const selectedCoupon = coupons.find(c => c.id === selectedCouponId);
  const finalTotal = Math.max(0, total - (selectedCoupon?.discount || 0));

  const handlePlaceOrder = async () => {
    if (items.length === 0) {
      toast.error('购物车是空的！');
      return;
    }

    const orderId = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // 发送QQ通知
    await sendQQNotification({
      orderId,
      items: items.map(item => ({
        name: item.dish.name,
        quantity: item.quantity,
        price: item.dish.price
      })),
      total,
      finalTotal,
      couponUsed: selectedCoupon ? {
        code: selectedCoupon.code,
        discount: selectedCoupon.discount
      } : undefined
    });

    onPlaceOrder(selectedCouponId);
    setIsOpen(false);
    toast.success('下单成功！订单详情已推送至QQ 💝');
  };

  const buttonAnimation = useSpring({
    loop: true,
    from: { transform: 'scale(1)' },
    to: [
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' }
    ],
    config: { tension: 300, friction: 10 }
  });

  return (
    <>
      <animated.button
        onClick={() => setIsOpen(true)}
        style={buttonAnimation}
        className="fixed left-1/2 bottom-8 -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition-all flex items-center gap-2"
      >
        <ShoppingCart size={24} />
        <span className="font-medium">购物车</span>
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {items.length}
          </span>
        )}
      </animated.button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Heart className="text-red-400" size={24} />
                <h2 className="text-xl font-bold text-gray-800">购物车</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="mx-auto text-red-300 mb-3" size={48} />
                  <p className="text-gray-400">购物车是空的</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.dish.id}
                      className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.dish.image}
                          alt={item.dish.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{item.dish.name}</h3>
                          <p className="text-sm text-red-500">¥{item.dish.price}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, item.quantity - 1)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="text-red-400 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {coupons.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-gray-800 font-medium mb-2">可用优惠券</h3>
                  <select
                    value={selectedCouponId || ''}
                    onChange={(e) => setSelectedCouponId(e.target.value || undefined)}
                    className="w-full bg-gray-50 rounded-lg p-2 border border-gray-200"
                  >
                    <option value="">不使用优惠券</option>
                    {coupons.map((coupon) => (
                      <option key={coupon.id} value={coupon.id}>
                        {coupon.code} - 优惠{coupon.discount}元
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 p-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>小计</span>
                <span>¥{total}</span>
              </div>
              {selectedCoupon && (
                <div className="flex justify-between text-red-500 mb-2">
                  <span>优惠券折扣</span>
                  <span>-¥{selectedCoupon.discount}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
                <span>总计</span>
                <span>¥{finalTotal}</span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={onClear}
                  className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  清空购物车
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                >
                  下单
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};