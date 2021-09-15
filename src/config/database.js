// module.exports = {
//   dialect: 'mysql',
//   host: 'localhost',
//   username: 'database-mysql',
//   password: '1298',
//   database: 'gobarber',
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredALL: true,
//   },
// };

require('dotenv/config');

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3308,
      user: 'teste',
      password: '1298',
      database: 'reload',
    },
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};


