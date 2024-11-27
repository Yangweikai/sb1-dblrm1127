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

export const dishes: Dish[] = [
  {
    id: 1,
    name: '麻婆豆腐',
    pinyinName: 'Mapo Tofu',
    price: 38,
    spicyLevel: 4,
    image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.OA5MSKpB2Oa7reE77DgN0gHaGp&w=263&h=236&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '经典川菜，嫩滑豆腐配以麻辣酱汁，香而不腻',
    ingredients: ['豆腐', '猪肉末', '豆瓣酱', '花椒', '葱花'],
    recipe: ['准备嫩豆腐切块', '爆香豆瓣酱', '加入肉末翻炒', '放入豆腐煮制', '撒上花椒粉'],
    category: '热菜'
  },
  {
    id: 2,
    name: '回锅肉',
    pinyinName: 'Twice Cooked Pork',
    price: 58,
    spicyLevel: 3,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.d4oBZKLCHv9RV8-W1uUBPQHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '香糯可口的川味经典，肥而不腻',
    ingredients: ['五花肉', '青椒', '蒜苗', '豆瓣酱'],
    recipe: ['煮熟五花肉', '切片备用', '爆香配料', '大火快炒'],
    category: '热菜'
  },
  {
    id: 3,
    name: '宫保鸡丁',
    pinyinName: 'Kung Pao Chicken',
    price: 46,
    spicyLevel: 3,
    image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.pHBW2D3wRzK5MvtPNhPcXAHaFk&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '鸡肉嫩滑，花生香脆，口感丰富',
    ingredients: ['鸡胸肉', '花生', '干辣椒', '葱段'],
    recipe: ['腌制鸡丁', '炸花生', '爆香配料', '大火翻炒'],
    category: '热菜'
  },
  {
    id: 4,
    name: '水煮鱼',
    pinyinName: 'Boiled Fish in Hot Chili Oil',
    price: 88,
    spicyLevel: 5,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.6j_zTSaeT_qdUXW1AxV4GgHaEJ&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '鲜嫩鱼片配以麻辣汤底，令人回味无穷',
    ingredients: ['草鱼片', '豆芽', '辣椒', '花椒'],
    recipe: ['腌制鱼片', '准备汤底', '煮制配菜', '最后加入鱼片'],
    category: '热菜'
  },
  {
    id: 5,
    name: '夫妻肺片',
    pinyinName: 'Sliced Beef and Ox Tongue in Chili Sauce',
    price: 48,
    spicyLevel: 4,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.-w-fLZjQgpxXQyTa_Znm2QHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '经典川味凉菜，香辣可口',
    ingredients: ['牛肉', '牛舌', '辣椒油', '花生'],
    recipe: ['煮制牛肉', '切片', '调制料汁', '拌制'],
    category: '冷菜'
  },
  {
    id: 6,
    name: '担担面',
    pinyinName: 'Dan Dan Noodles',
    price: 28,
    spicyLevel: 4,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.isX3lgK5vXRLwDK3_eWVlQHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '传统街边小吃，麻辣鲜香，面条劲道',
    ingredients: ['面条', '猪肉末', '花生碎', '芽菜', '红油'],
    recipe: ['煮面', '炒制肉末', '调制酱料', '浇汁拌面'],
    category: '特色主食'
  },
  {
    id: 7,
    name: '鱼香肉丝',
    pinyinName: 'Yu Xiang Rou Si',
    price: 42,
    spicyLevel: 2,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.Wa5bZF30J6ciizf1UQdgGwHaFi&w=289&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '咸甜适中，口感丰富的经典川菜',
    ingredients: ['猪肉丝', '木耳', '胡萝卜', '泡椒'],
    recipe: ['腌制肉丝', '配菜切丝', '调制鱼香汁', '大火快炒'],
    category: '热菜'
  },
  {
    id: 8,
    name: '口水鸡',
    pinyinName: 'Mouth-Watering Chicken',
    price: 45,
    spicyLevel: 3,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.BTmHiJgk4yUEEcv6cbFjRwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '凉菜中的经典，麻辣鲜香',
    ingredients: ['白切鸡', '花生米', '芝麻', '辣椒油'],
    recipe: ['煮鸡', '切块', '调制料汁', '浇汁'],
    category: '冷菜'
  },
  {
    id: 9,
    name: '辣子鸡',
    pinyinName: 'Chongqing Spicy Chicken',
    price: 56,
    spicyLevel: 5,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.h9iknhxHomBPk3NL4kINVwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '重庆特色，香辣酥脆',
    ingredients: ['鸡块', '干辣椒', '花椒', '蒜末'],
    recipe: ['腌制鸡块', '油炸', '爆香配料', '最后翻炒'],
    category: '热菜'
  },
  {
    id: 10,
    name: '蒜泥白肉',
    pinyinName: 'Sliced Pork with Garlic Sauce',
    price: 38,
    spicyLevel: 1,
    image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.-TubCI-_u5a8nUbAc3w7mAHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '清爽可口的传统凉菜',
    ingredients: ['五花肉', '蒜泥', '酱油', '香菜'],
    recipe: ['煮肉', '切片', '调蒜泥汁', '浇汁'],
    category: '冷菜'
  },
  {
    id: 11,
    name: '毛血旺',
    pinyinName: 'Mao Xue Wang',
    price: 88,
    spicyLevel: 5,
    image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.LiZ3ryTgmom1S5IpULVc_QHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '重庆名菜，麻辣鲜香',
    ingredients: ['毛肚', '血旺', '千层肚', '辣椒'],
    recipe: ['准备食材', '煮制汤底', '加入配料', '调味'],
    category: '热菜'
  },
  {
    id: 12,
    name: '钟水饺',
    pinyinName: 'Zhong Dumplings',
    price: 28,
    spicyLevel: 3,
    image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.Hhgxnlmnmh-4CB1HUM7lnwHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '成都特色小吃，红油抄手',
    ingredients: ['猪肉馅', '虾仁', '红油', '醋'],
    recipe: ['和馅', '包饺', '煮饺', '浇汁'],
    category: '特色主食'
  },
  {
    id: 13,
    name: '干煸四季豆',
    pinyinName: 'Fried Green Beans',
    price: 32,
    spicyLevel: 2,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.tkW2U9v-FEq8A35cCDaa8QHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '清脆爽口的素菜',
    ingredients: ['四季豆', '肉末', '干辣椒', '蒜末'],
    recipe: ['焯豆', '炸豆', '爆香配料', '翻炒'],
    category: '川味小炒'
  },
  
  {
    id: 15,
    name: '泡椒凤爪',
    pinyinName: 'Pickled Pepper Chicken Feet',
    price: 36,
    spicyLevel: 3,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.X6yDSke5A7S9HTz8X6U-_QHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '开胃下酒的好菜',
    ingredients: ['鸡爪', '泡椒', '姜片', '蒜'],
    recipe: ['清洗鸡爪', '焯水', '炒制', '腌制'],
    category: '冷菜'
  },
  {
    id: 16,
    name: '豆花饭',
    pinyinName: 'Douhua Rice',
    price: 22,
    spicyLevel: 2,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.zvveKkeOgGcdMB2klr6aBgHaE1&w=309&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '成都特色小吃，香嫩可口',
    ingredients: ['豆花', '米饭', '肉末', '咸菜'],
    recipe: ['煮豆花', '炒肉末', '配料', '拌制'],
    category: '特色主食'
  },
  {
    id: 18,
    name: '酸菜鱼',
    pinyinName: 'Sauerkraut Fish',
    price: 78,
    spicyLevel: 3,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.9BWoFXR-UCNIdWtCZu8DagHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '酸辣开胃，鱼肉鲜嫩',
    ingredients: ['鲈鱼', '酸菜', '豆芽', '辣椒'],
    recipe: ['腌制鱼片', '炒酸菜', '煮汤', '煮鱼'],
    category: '热菜'
  },
  {
    id: 19,
    name: '红油抄手',
    pinyinName: 'Red Oil Wontons',
    price: 32,
    spicyLevel: 3,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.69voaGN0-zP1ry7yNeUXmgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '传统小吃，鲜香麻辣',
    ingredients: ['猪肉馅', '虾仁', '红油', '葱花'],
    recipe: ['和馅', '包抄手', '煮制', '浇汁'],
    category: '特色主食'
  },
  {
    id: 21,
    name: '白菜豆腐汤',
    pinyinName: 'Chinese Cabbage and Tofu Soup',
    price: 28,
    spicyLevel: 1,
    image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.S8pjYUI77JPaX-3N-MmLggHaJd&w=221&h=282&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '清淡鲜美，营养健康的家常汤品',
    ingredients: ['白菜', '豆腐', '香菇', '葱花'],
    recipe: ['切菜切豆腐', '煲汤', '加入调味料', '撒葱花'],
    category: '热菜'
  },
  {
    id: 22,
    name: '莴笋鸡蛋炒虾仁',
    pinyinName: 'Stir-fried Lettuce Stem with Eggs and Shrimp',
    price: 48,
    spicyLevel: 1,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.MgNCcx3WX0hHn9k8U3fzJQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '清甜爽口，营养丰富的家常菜',
    ingredients: ['莴笋', '虾仁', '鸡蛋', '葱姜'],
    recipe: ['切莴笋', '炒虾仁', '打散鸡蛋', '翻炒均匀'],
    category: '川味小炒'
  },
  {
    id: 23,
    name: '木耳炒山药',
    pinyinName: 'Stir-fried Black Fungus with Yam',
    price: 36,
    spicyLevel: 1,
    image: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.tLk-CeiTrSQsE1T7uIbgowHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '营养美味，口感清脆',
    ingredients: ['黑木耳', '山药', '胡萝卜', '青椒'],
    recipe: ['泡发木耳', '切山药', '配菜切丁', '翻炒'],
    category: '川味小炒'
  },
  {
    id: 24,
    name: '清炖排骨',
    pinyinName: 'Clear-broth Pork Ribs Soup',
    price: 58,
    spicyLevel: 1,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.ih3HzBxz5nmhM28Gwqj7owHaFN&w=297&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '汤清味美，排骨鲜嫩',
    ingredients: ['排骨', '白萝卜', '姜片', '香菜'],
    recipe: ['焯水去腥', '加入配料', '小火慢炖', '调味完成'],
    category: '热菜'
  },
  {
    id: 25,
    name: '红烧鸡翅',
    pinyinName: 'Braised Chicken Wings',
    price: 46,
    spicyLevel: 2,
    image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.oIXq5rB0vfpLgbPT-7ftoQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '色泽红亮，味道鲜美',
    ingredients: ['鸡翅', '姜片', '葱段', '料酒'],
    recipe: ['腌制鸡翅', '煎至金黄', '加入调料', '收汁即可'],
    category: '热菜'
  },
  {
    id: 26,
    name: '红烧排骨',
    pinyinName: 'Braised Pork Ribs',
    price: 68,
    spicyLevel: 2,
    image: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.vKQUGS2IKt03DttvT1jBYgHaG6&w=258&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '肉质酥烂，味道浓郁',
    ingredients: ['排骨', '姜片', '蒜', '八角'],
    recipe: ['焯水去腥', '煎排骨', '加入调料', '炖至入味'],
    category: '热菜'
  },
  {
    id: 27,
    name: '西红柿炒鸡蛋',
    pinyinName: 'Stir-fried Tomato with Eggs',
    price: 28,
    spicyLevel: 1,
    image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.DgxP1HWUPfW4cxXbROXoewHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    description: '家常经典，酸甜可口',
    ingredients: ['西红柿', '鸡蛋', '葱花', '盐'],
    recipe: ['切西红柿', '打散鸡蛋', '分别煎炒', '最后同炒'],
    category: '川味小炒'
  }
];