import mongoose from "mongoose";
const schema = mongoose.Schema;

const productsShema = new schema({
    name: String,
    note: String,
    image: String,
    category: String,
    created_at: Date,
    last_update: Date,
    _deleted: {type: Boolean, default: false}
});
const productModel = mongoose.model('productModel', productsShema)
export default productModel ;
