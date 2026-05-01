const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({ user: req.user._id });
        res.json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private
const createProduct = async (req, res, next) => {
    try {
        const { name, category, stock, maxStock, price } = req.body;

        const product = await Product.create({
            user: req.user._id,
            name,
            category,
            stock,
            maxStock,
            price
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = req.body.name || product.name;
            product.category = req.body.category || product.category;
            product.stock = req.body.stock !== undefined ? req.body.stock : product.stock;
            product.maxStock = req.body.maxStock !== undefined ? req.body.maxStock : product.maxStock;
            product.price = req.body.price !== undefined ? req.body.price : product.price;

            const updatedProduct = await product.save();
            res.json({
                success: true,
                message: "Product updated successfully",
                data: updatedProduct
            });
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await Product.deleteOne({ _id: product._id });
            res.json({
                success: true,
                message: "Product deleted successfully",
                data: { _id: req.params.id }
            });
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};
