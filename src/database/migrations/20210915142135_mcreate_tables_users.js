
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name', [30]);
    table.string('email', [20]).notNullable().unique();
    table.string('password_hash', [20]).notNullable();


    table.timestamp('create_at').defaultTo(knex.fn.now())
    table.timestamp('update_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('users')

