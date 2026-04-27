// A simple utility for calculating stats when needed
// We can house pure logic here for modularity

/**
 * Calculates sum of sales from an array of sale objects
 * @param {Array} sales 
 * @returns {Number} Total sum
 */
const sumSales = (sales) => {
    return sales.reduce((total, sale) => total + (sale.totalPrice || 0), 0);
};

/**
 * Filter items with stock below threshold
 * @param {Array} products 
 * @param {Number} threshold 
 * @returns {Array} Low stock products
 */
const getLowStock = (products, threshold = 20) => {
    return products.filter(p => p.stock < threshold);
};

module.exports = {
    sumSales,
    getLowStock
};
