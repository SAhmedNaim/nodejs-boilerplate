const userValidate = require('./user-request-model')
const roleValidate = require('./role-request-model')

const validators = {
    userSchemaValidate: userValidate,
    roleSchemaValidate: roleValidate,
};

module.exports = validators;