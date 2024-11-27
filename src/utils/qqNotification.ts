import axios from 'axios';

interface OrderNotification {
  orderId: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  finalTotal: number;
  couponUsed?: {
    code: string;
    discount: number;
  };
}

export async function sendQQNotification(notification: OrderNotification) {
  // 这里需要替换为实际的QQ机器人API地址和配置
  const QQ_BOT_API = '102521682';
  const TARGET_QQ = '3464119301';

  try {
    const message = formatOrderMessage(notification);
    await axios.post(QQ_BOT_API, {
      target: TARGET_QQ,
      message: message
    });
  } catch (error) {
    console.error('Failed to send QQ notification:', error);
  }
}

function formatOrderMessage(order: OrderNotification): string {
  const items = order.items
    .map(item => `${item.name} x${item.quantity} (¥${item.price})`)
    .join('\n');

  return `
新订单通知 #${order.orderId}
------------------------
订单详情：
${items}
------------------------
小计：¥${order.total}
${order.couponUsed ? `优惠券：${order.couponUsed.code} (-¥${order.couponUsed.discount})` : ''}
总计：¥${order.finalTotal}
  `.trim();
}