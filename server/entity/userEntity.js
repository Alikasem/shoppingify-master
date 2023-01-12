import mongoose from "mongoose";

const schema = mongoose.Schema;
const ProductListSchema = new schema({
    products: {type: schema.Types.ObjectId, ref: 'productModel'},
    total: Number
})
const UserSchema = new schema({
    name: String,
    productList: [ProductListSchema]
});
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
