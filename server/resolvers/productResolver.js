import product_controller from "../controllers/product_controller.js";
const productResolver = {
    Query: {
        getProduct: async (parent,args) => {
            return await product_controller.getProduct(args);
        },
        products: async() => {
            return  await product_controller.products();
        }
    },
    Mutation: {
        createProduct: async(parent,args) => {
            return await product_controller.createProduct(args);
        },
        updateProduct: async(parent,args) => {
            return  await product_controller.updateProduct(args);
        },
        deleteProduct: async(parent,args) =>{
            return  await product_controller.deleteProduct(args);
        }
    }
}
export default productResolver
