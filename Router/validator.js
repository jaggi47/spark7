const Joi = require('joi');


exports.signUp = async function (req, res, next) {

    const schema = Joi.object().keys({
        full_name : Joi.string().required(),
        password: Joi.string().required().trim().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})./),
        city : Joi.string().required()
    });

    let validFields = validateSchema(req.body, res, schema);
    if (validFields) {
        next()
    }
};

function validateSchema(req, res, schema) {
    const validation = Joi.validate(req, schema);
    if (validation.error) {
      res.status(400).send({ errorMessage : validation.error.details[0].message })
      return false;
    }
    return true;
}

