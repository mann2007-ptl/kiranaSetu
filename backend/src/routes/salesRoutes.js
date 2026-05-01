const express = require('express');
const router = express.Router();
const { createSale, getSales } = require('../controllers/salesController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/')
    .get(protect, getSales)
    .post(protect, createSale);

module.exports = router;
