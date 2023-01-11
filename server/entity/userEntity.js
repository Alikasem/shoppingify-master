var mongoose = require('mongoose');
var Product = require('./productsEntity.js');

const schema = mongoose.Schema;
const ProductListSchema = new schema({
    products: {type: schema.Types.ObjectId, ref: 'Product'},
    total: Number
})
const UserSchema = new schema({
    name: String,
    productList: [ProductListSchema]
});
module.exports = mongoose.model('User', UserSchema);
