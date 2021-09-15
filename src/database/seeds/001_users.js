
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'jhonat h', email: 'jhonat@gmail.com', password_hash: '432423423234'},
        {id: 2, name: 'jhonat heber', email: 'jhonat@outlok.com', password_hash: '43242553423234'},
        {id: 3, name: 'jhonat souza', email: 'jhonat@teste.com', password_hash: '432423423234'},
      ]);
    });
};
