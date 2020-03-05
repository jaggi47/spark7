const userController = require('../Controller/user');
const universalFunction = require('../Utils/universalFunction')


exports.signUp = async (req, res) => {
    try {
        const data = await userController.signUp(req.body);
        universalFunction.sendSuccess(200, data, res);
    } catch (error) {
        universalFunction.sendError(400, error, res);
    }
};

exports.getAllMembers = async (req, res) => {
    try {
        const data = await userController.getAllMembers(req.query);
        universalFunction.sendSuccess(200, data, res);
    } catch (error) {
        console.log(error)
        universalFunction.sendError(400, error, res);
    }
};