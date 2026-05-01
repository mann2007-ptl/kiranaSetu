const {
    calculateTotalProducts,
    calculateTodaySales,
    calculateTotalSalesAmount,
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
        const totalProducts = await calculateTotalProducts(req.user._id);
        const lowStockProducts = await getLowStockItems(req.user._id);
        const totalSales = await calculateTotalSalesAmount(req.user._id);

        res.json({
            success: true,
            message: "Dashboard stats fetched successfully",
            data: {
                totalProducts,
                lowStockProducts,
                totalSales
            }
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
        const trend = await getSalesTrend(req.user._id);
        res.json({
            success: true,
            message: "Sales trend fetched successfully",
            data: trend
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get simple demand forecast
// @route   GET /api/dashboard/forecast
// @access  Private
const getForecastResponse = async (req, res, next) => {
    try {
        const forecast = await generateForecast(req.user._id);

        // Even if DB is empty, provide mock structure as per spec
        if (forecast.length === 0) {
            return res.json({
                success: true,
                message: "Forecast fetched successfully",
                data: [
                    { product: "Milk", demand: 150 },
                    { product: "Snacks", demand: 80 }
                ]
            });
        }

        res.json({
            success: true,
            message: "Forecast fetched successfully",
            data: forecast
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get dashboard insights
// @route   GET /api/dashboard/insights
// @access  Private
const getInsightsResponse = async (req, res, next) => {
    try {
        const insights = await generateInsights(req.user._id);
        res.json({
            success: true,
            message: "Insights fetched successfully",
            data: insights
        });
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
