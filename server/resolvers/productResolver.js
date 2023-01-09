var product_controller = require("../controllers/product_controller.js")
const productResolver = {
    Query: {
        getProduct: async (parent, args) => {
            const result = await product_controller.getProduct(args.id);
            return result;
        },
        products: async() => {
            return  await product_controller.products();
        }
    },
    Mutation: {
        createProduct: async(parent, args) => {
            const result = await product_controller.createProduct(args);
            return result;
        },
        updateProduct: async(parent, args) => {
            const result = await product_controller.updateProduct(args);
            return result;
        },
        deleteProduct: async(parent, args) =>{
            const result = await product_controller.deleteProduct(args);
            return result;
        }
    }
}

module.exports = productResolver;
