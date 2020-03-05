var md5 = require('md5');

const usersModel = require('../Model/user')

exports.signUp = signUp;
exports.getAllMembers = getAllMembers;



async function signUp(payload) {
    const user = new usersModel({
        full_name: payload.full_name,
        password: md5(payload.password),
        city: payload.city
    });

    await usersModel.create(user)
    return { message : "User Inserted Successfully."}
}

async function getAllMembers() {
   return await usersModel.aggregate([{
        $group : {
            _id: "$city",
            users : { $addToSet : "$full_name"}
        }
    }])
}