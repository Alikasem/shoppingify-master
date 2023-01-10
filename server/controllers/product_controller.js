var Product = require('../entity/productsEntity.js');
const Message = require("../helper/Message");
async function getProduct(args){
    const product = await Product.findById(args.id).catch(() =>
        new Message('product not here!! (<!>_<!>) ', 404)
    );
    return product;
};
async function products() {
    const products = await Product.find().catch((error)=> console.log(error));
    return products;
};
async function createProduct(args) {
    const newProduct = new Product({
        name: args.product.name,
        note: args.product.note,
        image: args.product.image,
        category: args.product.category,
        created_at: new Date().toLocaleDateString('IT-it')
    });
    await Product.create(newProduct);
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

    await Product.updateOne(
        {_id: args.id},
        {$set: newData});
    return new Message('Product Updated!', 201)
};
async function deleteProduct(args) {
    const product = await Product.findById(args.id);
    if(product){
        const newData = {
            _deleted: true,
            last_update: new Date()
        }
        await Product.updateOne({_id: args.id}, {$set: newData})
    }else{
        return new Message('product not found!!', 404)
    }
    return new Message('product deleted!', 200)

}
module.exports = {
    getProduct,
    products,
    createProduct,
    updateProduct,
    deleteProduct
};
