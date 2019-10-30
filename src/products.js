const getProducts = require('./productData');

class Product {
    getProducts() {
        return getProducts();
    }
}
module.exports = Product;