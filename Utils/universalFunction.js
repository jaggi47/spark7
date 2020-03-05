
exports.sendSuccess = function (statusCode, data, res) {
    return res.status(statusCode).send(data);
};

exports.sendError = function (statusCode, err, res) {
    return res.status(statusCode || 400).send({ message :err.message });
};