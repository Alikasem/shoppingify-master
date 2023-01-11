const product_controller = require('./productResolver.js');
const user_controller = require('./userResolver.js');
// const resolvers = [product_controller, user_controller]
export default [
    product_controller, user_controller
]
