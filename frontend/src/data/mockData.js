// src/data/mockData.js

export const statsData = [
    {
        id: 1,
        title: 'Total Products',
        value: '1,248',
        trend: '+12% from last month',
        trendType: 'positive',
        icon: 'package'
    },
    {
        id: 2,
        title: 'Today\'s Sales',
        value: '₹14,500',
        trend: '+5.4% from yesterday',
        trendType: 'positive',
        icon: 'indian-rupee'
    },
    {
        id: 3,
        title: 'Low Stock Items',
        value: '24',
        trend: '-3 items since yesterday',
        trendType: 'negative',
        icon: 'alert-triangle'
    },
    {
        id: 4,
        title: 'Predicted Demand',
        value: '+18%',
        trend: 'For upcoming festival week',
        trendType: 'positive',
        icon: 'trending-up'
    }
];

export const weeklyChartData = [
    { name: 'Mon', sales: 4000, expected: 2400 },
    { name: 'Tue', sales: 3000, expected: 1398 },
    { name: 'Wed', sales: 2000, expected: 9800 },
    { name: 'Thu', sales: 2780, expected: 3908 },
    { name: 'Fri', sales: 1890, expected: 4800 },
    { name: 'Sat', sales: 2390, expected: 3800 },
    { name: 'Sun', sales: 3490, expected: 4300 },
];

export const inventoryList = [
    {
        id: 'PRD-001',
        name: 'Aashirvaad Select Atta, 5kg',
        category: 'Groceries',
        stock: 142,
        status: 'healthy',
        image: '/products/atta.jpg',
        price: '₹240'
    },
    {
        id: 'PRD-002',
        name: 'Fortune Sunlite Refined Oil, 1L',
        category: 'Cooking Essentials',
        stock: 8,
        status: 'low',
        image: '/products/oil.jpg',
        price: '₹145'
    },
    {
        id: 'PRD-003',
        name: 'Tata Salt Vacuum Evaporated, 1kg',
        category: 'Groceries',
        stock: 85,
        status: 'healthy',
        image: '/products/salt.jpg',
        price: '₹24'
    },
    {
        id: 'PRD-004',
        name: 'Maggi 2-Minute Noodles, 70g',
        category: 'Snacks',
        stock: 12,
        status: 'low',
        image: '/products/maggi.jpg',
        price: '₹14'
    },
    {
        id: 'PRD-005',
        name: 'Amul Taaza Homogenised Milk, 1L',
        category: 'Dairy',
        stock: 45,
        status: 'healthy',
        image: 'data:image/jpeg;base64,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',
        price: '₹68'
    }
];

export const aiInsights = [
    {
        id: 'INS-1',
        message: 'Milk demand increasing. Historical data suggests a 40% surge this weekend.',
        type: 'trend',
        priority: 'high'
    },
    {
        id: 'INS-2',
        message: 'Snacks slowing down. Consider placing Maggie near the billing counter to clear aging stock.',
        type: 'action',
        priority: 'medium'
    },
    {
        id: 'INS-3',
        message: 'Supplier price drop alert. Oil prices fell by 2%. Optimal time to restock.',
        type: 'opportunity',
        priority: 'low'
    }
];

export const inventoryStatsData = [
    {
        id: 1,
        title: 'Total SKUs',
        value: '1,284',
        trend: '+42 added this month',
        trendType: 'positive',
        icon: 'package'
    },
    {
        id: 2,
        title: 'Low Stock',
        value: '24',
        trend: '6 items critical',
        trendType: 'negative',
        icon: 'alert-triangle'
    },
    {
        id: 3,
        title: 'High Demand',
        value: '182',
        trend: '+15% weekly increase',
        trendType: 'positive',
        icon: 'trending-up'
    },
    {
        id: 4,
        title: 'Turnover',
        value: '4.2x',
        trend: 'Above industry avg',
        trendType: 'positive',
        icon: 'indian-rupee'
    }
];

export const inventoryProducts = [
    {
        id: 'PRD-101',
        name: 'Organic Full Cream Milk',
        sku: 'DR-0912',
        category: 'Dairy',
        stock: 412,
        maxStock: 500,
        status: 'normal',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop'
    },
    {
        id: 'PRD-102',
        name: 'Amul Butter 500g',
        sku: 'DR-0245',
        category: 'Dairy',
        stock: 58,
        maxStock: 200,
        status: 'low',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=200&h=200&fit=crop'
    },
    {
        id: 'PRD-103',
        name: "Lay's Classic Salted Chips",
        sku: 'SN-1021',
        category: 'Snacks',
        stock: 320,
        maxStock: 400,
        status: 'normal',
        image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&h=200&fit=crop'
    },
    {
        id: 'PRD-104',
        name: 'Tata Salt 1kg',
        sku: 'ST-0033',
        category: 'Staples',
        stock: 85,
        maxStock: 300,
        status: 'low',
        image: '/products/salt.jpg'
    },
    {
        id: 'PRD-105',
        name: 'Aashirvaad Atta 5kg',
        sku: 'ST-0078',
        category: 'Staples',
        stock: 450,
        maxStock: 500,
        status: 'normal',
        image: '/products/atta.jpg'
    },
    {
        id: 'PRD-106',
        name: 'Maggi 2-Min Noodles 70g',
        sku: 'SN-0412',
        category: 'Snacks',
        stock: 12,
        maxStock: 250,
        status: 'critical',
        image: '/products/maggi.jpg'
    },
    {
        id: 'PRD-107',
        name: 'Mother Dairy Paneer 200g',
        sku: 'DR-0567',
        category: 'Dairy',
        stock: 165,
        maxStock: 200,
        status: 'normal',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=80&h=80&fit=crop&q=80'
    },
    {
        id: 'PRD-108',
        name: 'Fortune Sunlite Oil 1L',
        sku: 'ST-0190',
        category: 'Staples',
        stock: 0,
        maxStock: 150,
        status: 'out',
        image: '/products/oil.jpg'
    }
];
