import productModel from '../entity/productsEntity.js';
import Message from '../helper/Message.js'

async function getProduct(args){
    const product = await productModel.findById(args.id);
    return product;
};

async function products() {
    const products = await productModel.find().catch((error)=> console.log(error));
    return products;
};

async function createProduct(args) {
    const newProduct = new productModel({
        name: args.product.name,
        note: args.product.note,
        image: args.product.image,
        category: args.product.category,
        created_at: new Date().toLocaleDateString('IT-it')
    });
    await productModel.create(newProduct);
    return new Message('Product Created!', 201)
}

async function updateProduct(args){
    let newData = {
        name: args.product.name,
        note: args.product.note,
        image: args.product.image,
        category: args.product.category,
        last_update: new Date()
    };

    await productModel.updateOne(
        {_id: args.id},
        {$set: newData});
    return new Message('Product Updated!', 201)
};
async function deleteProduct(args) {
    const product = await productModel.findById(args.id);
    if(product){
        const newData = {
            _deleted: true,
            last_update: new Date()
        }
        await productModel.updateOne({_id: args.id}, {$set: newData})
    }else{
        return new Message('product not found!!', 404)
    }
    return new Message('product deleted!', 200)

}
const product_controller = {
    getProduct,
    products,
    createProduct,
    updateProduct,
    deleteProduct
}
export default product_controller;
