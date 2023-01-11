var user_controller = require('../controllers/user_controller.js');

const userResolver = {
    Query: {
        getUsersHistory: async () => {
            const result = await user_controller.getUsersHistory();
            return result;
        }
    },
    Mutation: {
        createUser: async (parent,args) => {
            const result = await user_controller.createUser(args);
            return result;
        }
    }
}
module.exports = userResolver
