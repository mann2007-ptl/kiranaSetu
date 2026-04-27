const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
    getDashboardStats,
    getSalesTrendResponse,
    getForecastResponse,
    getInsightsResponse
} = require('../controllers/dashboardController');

const router = express.Router();

router.get('/stats', protect, getDashboardStats);
router.get('/sales-trend', protect, getSalesTrendResponse);
router.get('/forecast', protect, getForecastResponse);
router.get('/insights', protect, getInsightsResponse);

module.exports = router;
