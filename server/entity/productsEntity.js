var mongoose = require('mongoose');
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

module.exports = mongoose.model('Product', productsShema);
