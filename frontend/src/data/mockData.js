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
        price: '₹240'
    },
    {
        id: 'PRD-002',
        name: 'Fortune Sunlite Refined Oil, 1L',
        category: 'Cooking Essentials',
        stock: 8,
        status: 'low',
        price: '₹145'
    },
    {
        id: 'PRD-003',
        name: 'Tata Salt Vacuum Evaporated, 1kg',
        category: 'Groceries',
        stock: 85,
        status: 'healthy',
        price: '₹24'
    },
    {
        id: 'PRD-004',
        name: 'Maggi 2-Minute Noodles, 70g',
        category: 'Snacks',
        stock: 12,
        status: 'low',
        price: '₹14'
    },
    {
        id: 'PRD-005',
        name: 'Amul Taaza Homogenised Milk, 1L',
        category: 'Dairy',
        stock: 45,
        status: 'healthy',
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
    },
    {
        id: 'PRD-102',
        name: 'Amul Butter 500g',
        sku: 'DR-0245',
        category: 'Dairy',
        stock: 58,
        maxStock: 200,
        status: 'low',
    },
    {
        id: 'PRD-103',
        name: "Lay's Classic Salted Chips",
        sku: 'SN-1021',
        category: 'Snacks',
        stock: 320,
        maxStock: 400,
        status: 'normal',
    },
    {
        id: 'PRD-104',
        name: 'Tata Salt 1kg',
        sku: 'ST-0033',
        category: 'Staples',
        stock: 85,
        maxStock: 300,
        status: 'low',
    },
    {
        id: 'PRD-105',
        name: 'Aashirvaad Atta 5kg',
        sku: 'ST-0078',
        category: 'Staples',
        stock: 450,
        maxStock: 500,
        status: 'normal',
    },
    {
        id: 'PRD-106',
        name: 'Maggi 2-Min Noodles 70g',
        sku: 'SN-0412',
        category: 'Snacks',
        stock: 12,
        maxStock: 250,
        status: 'critical',
    },
    {
        id: 'PRD-107',
        name: 'Mother Dairy Paneer 200g',
        sku: 'DR-0567',
        category: 'Dairy',
        stock: 165,
        maxStock: 200,
        status: 'normal',
    },
    {
        id: 'PRD-108',
        name: 'Fortune Sunlite Oil 1L',
        sku: 'ST-0190',
        category: 'Staples',
        stock: 0,
        maxStock: 150,
        status: 'out',
    }
];

export const salesProducts = [
    {
        id: 'POS-001',
        name: 'Organic Full Cream Milk',
        price: 68,
        category: 'Dairy',
        stock: 412,
        badge: 'Best Seller',
    },
    {
        id: 'POS-002',
        name: 'Amul Butter 500g',
        price: 275,
        category: 'Dairy',
        stock: 58,
        badge: null,
    },
    {
        id: 'POS-003',
        name: "Lay's Classic Salted Chips",
        price: 40,
        category: 'Snacks',
        stock: 320,
        badge: 'Popular',
    },
    {
        id: 'POS-004',
        name: 'Tata Salt 1kg',
        price: 24,
        category: 'Staples',
        stock: 85,
        badge: null,
    },
    {
        id: 'POS-005',
        name: 'Aashirvaad Atta 5kg',
        price: 240,
        category: 'Staples',
        stock: 450,
        badge: 'Best Seller',
    },
    {
        id: 'POS-006',
        name: 'Maggi 2-Min Noodles 70g',
        price: 14,
        category: 'Snacks',
        stock: 12,
        badge: null,
    },
    {
        id: 'POS-007',
        name: 'Mother Dairy Paneer 200g',
        price: 90,
        category: 'Dairy',
        stock: 165,
        badge: null,
    },
    {
        id: 'POS-008',
        name: 'Fortune Sunlite Oil 1L',
        price: 145,
        category: 'Staples',
        stock: 38,
        badge: null,
    }
];

export const forecastData = [
    { day: '1', predicted: 240, baseline: 190 },
    { day: '2', predicted: 280, baseline: 195 },
    { day: '3', predicted: 310, baseline: 200 },
    { day: '4', predicted: 290, baseline: 205 },
    { day: '5', predicted: 420, baseline: 220 },
    { day: '6', predicted: 450, baseline: 215 },
    { day: '7', predicted: 380, baseline: 210 },
    { day: '8', predicted: 410, baseline: 225 },
    { day: '9', predicted: 480, baseline: 230 },
    { day: '10', predicted: 520, baseline: 240 },
    { day: '11', predicted: 550, baseline: 250 },
    { day: '12', predicted: 590, baseline: 260 },
    { day: '13', predicted: 620, baseline: 270 },
    { day: '14', predicted: 650, baseline: 280 },
];

export const reorderRecommendations = [
    {
        id: 'REC-001',
        name: 'Organic Full Cream Milk',
        category: 'Dairy',
        currentStock: 412,
        suggestedQty: 1500,
        urgency: 'Scheduled'
    },
    {
        id: 'REC-002',
        name: 'Amul Butter 500g',
        category: 'Dairy',
        currentStock: 58,
        suggestedQty: 400,
        urgency: 'High'
    },
    {
        id: 'REC-003',
        name: 'Maggi 2-Min Noodles 70g',
        category: 'Snacks',
        currentStock: 12,
        suggestedQty: 800,
        urgency: 'Critical'
    },
    {
        id: 'REC-004',
        name: 'Tata Salt 1kg',
        category: 'Staples',
        currentStock: 85,
        suggestedQty: 500,
        urgency: 'Medium'
    }
];

export const alertsData = [
    {
        id: 'ALT-101',
        type: 'critical',
        title: 'Critical: Out of stock',
        description: 'Fortune Sunlite Oil 1L is completely out of stock.',
        timestamp: '5 mins ago',
        status: 'unread'
    },
    {
        id: 'ALT-102',
        type: 'warning',
        title: 'Low Stock: Amul Butter',
        description: 'Amul Butter 500g is critically low (58 units left).',
        timestamp: '2 hours ago',
        status: 'unread'
    },
    {
        id: 'ALT-103',
        type: 'info',
        title: 'Demand Spike: Avocados',
        description: 'Organic Avocados velocity increased by 120% in the last 24h.',
        timestamp: '4 hours ago',
        status: 'read'
    },
    {
        id: 'ALT-104',
        type: 'success',
        title: 'Resolved: Atta Replenished',
        description: 'Aashirvaad Atta 5kg stock has been replenished successfully.',
        timestamp: '1 day ago',
        status: 'read'
    },
    {
        id: 'ALT-105',
        type: 'warning',
        title: 'Low Stock: Maggi Noodles',
        description: 'Maggi 2-Min Noodles 70g dropping below safety stock (12 units).',
        timestamp: '1 day ago',
        status: 'read'
    }
];

export const nearbyStores = [
    { id: 'ST-001', name: 'Reliance Smart', distance: '1.2 km', rating: 4.8, available: true, address: 'Connaught Place, New Delhi' },
    { id: 'ST-002', name: 'Modern Bazaar', distance: '3.4 km', rating: 4.5, available: true, address: 'Cyber Hub, Gurugram' },
    { id: 'ST-003', name: 'Le Marche', distance: '5.1 km', rating: 4.2, available: false, address: 'Vasant Vihar, New Delhi' },
    { id: 'ST-004', name: 'Natures Basket', distance: '8.0 km', rating: 4.9, available: true, address: 'Defence Colony, New Delhi' },
];

export const supplyRequests = [
    { id: 'REQ-101', product: 'Fortune Sunlite Oil 1L', quantity: 20, requestingStore: 'Sharma Stores', urgency: 'High', status: 'Pending' },
    { id: 'REQ-102', product: 'Amul Butter 500g', quantity: 15, requestingStore: 'Gupta Traders', urgency: 'Medium', status: 'Pending' },
    { id: 'REQ-103', product: 'Aashirvaad Atta 5kg', quantity: 10, requestingStore: 'Verma Provisions', urgency: 'Low', status: 'Accepted' },
];
