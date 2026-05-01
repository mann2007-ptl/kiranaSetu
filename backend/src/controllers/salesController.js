const Sale = require('../models/Sale');
const Product = require('../models/Product');

// @desc    Create a sale
// @route   POST /api/sales
// @access  Private
const createSale = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }

        if (product.stock < quantity) {
            res.status(400);
            throw new Error('Insufficient stock');
        }

        const totalPrice = product.price * quantity;

        // Create sale
        const sale = await Sale.create({
            user: req.user._id,
            productId,
            quantity,
            totalPrice
        });

        // Deduct stock
        product.stock -= quantity;
        await product.save();

        res.status(201).json({
            success: true,
            message: "Sale created successfully",
            data: sale
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all sales
// @route   GET /api/sales
// @access  Public
const getSales = async (req, res, next) => {
    try {
        const sales = await Sale.find({ user: req.user._id }).populate('productId', 'name price');

        res.json({
            success: true,
            message: "Sales fetched successfully",
            data: sales
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createSale,
    getSales
};
