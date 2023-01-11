var User = require('../entity/userEntity.js');
var Message = require('../helper/Message.js');

async function getUsersHistory() {
    const users = await User.find().catch(err => console.log(err));
    return users;
};

async function createUser(args) {
    console.log('User======>', args.user);
    const user = new User({
        ...args.user,
        created_at: new Date(),
        last_update: new Date()
    });
    await User.create(user);
    return new Message('User Created!', 201);
}
module.exports = {
    getUsersHistory,
    createUser
}
