import UserModel from "../entity/userEntity.js";
import Message from "../helper/Message.js";

async function getUsersHistory() {
    const users = await UserModel.find().populate({path:'productList.products',model: "productModel"}).catch(err => console.log(err));
    return users;
};

async function createUser(args) {
    const user = new UserModel({
        ...args.user,
        created_at: new Date(),
        last_update: new Date()
    });
    await UserModel.create(user);
    return new Message('User Created!', 201);
}
const user_controller = {
    getUsersHistory,
    createUser
}
export default user_controller;
// module.exports = {
//     getUsersHistory,
//     createUser
// }
