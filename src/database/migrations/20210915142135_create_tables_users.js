/**
 * this function creates the migrations to the users table related database
 * @summary This function uses knex to create the table as its columns in a simple and efficient way.
 * @param {Knex.JS} knex - knex is a library that makes it possible to perform migrations in a simple way
 * @return {Knex.JS} it returns the knex schema to create the table
 */

exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name', [30]);
    table.string('email', [20]).notNullable().unique();
    table.string('password_hash').notNullable();

    table.timestamp('create_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
  });

/**
 * this function delete the migrations to the users table related database
 * @summary This function uses knex to delete the table as its columns in a simple and efficient way.
 * @param {Knex.JS} knex - knex is a library that makes it possible to perform migrations in a simple way
 * @return {Knex.JS} it returns the knex schema to delete the table
 */
exports.down = (knex) => knex.schema.dropTable('users');
