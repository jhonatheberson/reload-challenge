/**
 * this function creates the migrations to the desktops table related database
 * @summary This function uses knex to create the table as its columns in a simple and efficient way.
 * @param {Knex.JS} knex - knex is a library that makes it possible to perform migrations in a simple way
 * @return {Knex.JS} it returns the knex schema to create the table
 */

const { Knex } = require('knex');

exports.up = (knex) =>
  knex.schema.createTable('desktops', (table) => {
    table.increments('id');
    table.string('platform', [15]).notNullable();
    table.string('type', [20]);
    table.string('os', [20]);
    table.string('ip', [20]).notNullable().unique();
    table.integer('company_id').unsigned().notNullable();

    table.foreign('company_id').references('id').inTable('company');

    table.timestamps(true, true);
  });

/**
 * this function delete the migrations to the desktops table related database
 * @summary This function uses knex to delete the table as its columns in a simple and efficient way.
 * @param {Knex.JS} knex - knex is a library that makes it possible to perform migrations in a simple way
 * @return {Knex.JS} it returns the knex schema to delete the table
 */

exports.down = (knex) => knex.schema.dropTable('desktops');
