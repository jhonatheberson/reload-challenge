// import Sequelize from 'sequelize';

// import User from '../app/models/User';

const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile['development'])
// import databaseConfig from '../config/database';


// const models = [User];

// class Database {
//   constructor() {
//     this.init();
//   }

//   init() {
//     this.connection = new Sequelize(databaseConfig);

//     models.map((model) => model.init(this.connection));
//   }
// }

// export default new Database();

module.exports = knex;
