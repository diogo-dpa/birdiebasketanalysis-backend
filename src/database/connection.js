const configuration = require('../../knexfile')['development'];
console.log(configuration);

const connection = require('knex')(configuration);
module.exports = connection;