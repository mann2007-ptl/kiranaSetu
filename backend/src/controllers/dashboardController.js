const {
    calculateTotalProducts,
    calculateTodaySales,
    getLowStockItems,
    generateForecast,
    generateInsights,
    getSalesTrend
} = require('../services/analyticsService');

// @desc    Get dashboard key stats
// @route   GET /api/dashboard/stats
// @access  Private
const getDashboardStats = async (req, res, next) => {
    try {
        const totalProducts = await calculateTotalProducts();
        const todaySales = await calculateTodaySales();
        const lowStockItems = await getLowStockItems();

        // Simple predicted demand placeholder 
        const predictedDemand = await generateForecast();

        // Sum the forecasted values to return a generic total demand number if needed, 
        // or just return the array. The spec asks for 'predictedDemand (mock value or simple logic)'
        const totalDemand = predictedDemand.reduce((sum, item) => sum + item.demand, 0) || 350;

        res.json({
            totalProducts,
            todaySales,
            lowStockItems,
            predictedDemand: totalDemand
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get last 7 days sales data
// @route   GET /api/dashboard/sales-trend
// @access  Private
const getSalesTrendResponse = async (req, res, next) => {
    try {
        const trend = await getSalesTrend();
        res.json(trend);
    } catch (error) {
        next(error);
    }
};

// @desc    Get simple demand forecast
// @route   GET /api/dashboard/forecast
// @access  Private
const getForecastResponse = async (req, res, next) => {
    try {
        const forecast = await generateForecast();

        // Even if DB is empty, provide mock structure as per spec
        if (forecast.length === 0) {
            return res.json([
                { product: "Milk", demand: 150 },
                { product: "Snacks", demand: 80 }
            ]);
        }

        res.json(forecast);
    } catch (error) {
        next(error);
    }
};

// @desc    Get dashboard insights
// @route   GET /api/dashboard/insights
// @access  Private
const getInsightsResponse = async (req, res, next) => {
    try {
        const insights = await generateInsights();
        res.json(insights);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getDashboardStats,
    getSalesTrendResponse,
    getForecastResponse,
    getInsightsResponse
};
