const Product = require('../models/Product');
const Sale = require('../models/Sale');
const { sumSales } = require('../utils/calculateStats');

// Simple AI logic for demand forecasting based on mock trends or random data
const generateForecast = async () => {
    const products = await Product.find({}).limit(5); // Get a few products

    return products.map(product => {
        // Mock simple simulation for forecasting
        // In a real app, this would use historical sales data
        const baseDemand = product.stock * 0.5 + 20;
        const randomFactor = Math.floor(Math.random() * 30) - 10;
        const demand = Math.max(10, Math.floor(baseDemand + randomFactor));

        return {
            product: product.name,
            demand: demand
        };
    });
};

const getLowStockItems = async () => {
    const threshold = 20;
    const lowStockItems = await Product.find({ stock: { $lt: threshold } });
    return lowStockItems.length;
};

const calculateTodaySales = async () => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const todaySalesData = await Sale.find({
        createdAt: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    });

    return sumSales(todaySalesData);
};

const calculateTotalProducts = async () => {
    return await Product.countDocuments();
};

const generateInsights = async () => {
    const insights = [];

    // Check low stock
    const lowStockItems = await Product.find({ stock: { $lt: 20 } }).limit(3);
    if (lowStockItems.length > 0) {
        insights.push(`Low stock alert for ${lowStockItems.map(i => i.name).join(', ')}`);
    }

    // Add some realistic but mocked insights based on general logic
    insights.push("Milk demand increasing by 15% this week");
    insights.push("Snacks sales slowing down compared to last month");

    return insights;
};

// Generates the past 7 days of sales 
const getSalesTrend = async () => {
    const trend = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // For a real app, we would aggregate Sale collections grouped by date.
    // For simplicity, we are simulating the last 7 days of sales.
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);

        const startOfDay = new Date(d);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(d);
        endOfDay.setHours(23, 59, 59, 999);

        // Count sales for that specific day
        const daySales = await Sale.find({
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });

        const salesAmount = sumSales(daySales) || Math.floor(Math.random() * 500) + 500; // Mock if empty

        trend.push({
            date: days[d.getDay()],
            sales: salesAmount
        });
    }

    return trend;
};

module.exports = {
    calculateTotalProducts,
    calculateTodaySales,
    getLowStockItems,
    generateForecast,
    generateInsights,
    getSalesTrend
};
