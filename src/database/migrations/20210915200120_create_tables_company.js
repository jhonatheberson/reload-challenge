/**
 * this function creates the migrations to the company table related database
 * @summary This function uses knex to create the table as its columns in a simple and efficient way.
 * @param {Knex.JS} knex - knex is a library that makes it possible to perform migrations in a simple way
 * @return {Knex.JS} it returns the knex schema to create the table
 */
exports.up = (knex) =>
  knex.schema.createTable('company', (table) => {
    table.increments('id');
    table.string('business_name', [30]).notNullable();
    table.string('suffix', [10]);
    table.string('industry', [20]).notNullable();
    table.string('catch_phrase', [50]);
    table.string('bs_company_statement', [30]);
    table.string('logo', [50]);
    table.string('type', [30]);
    table.string('phone_number', [14]).notNullable();
    table.string('full_address', [30]).notNullable();
    table.string('latitude', [6]);
    table.string('longitude', [6]);

    table.integer('user_id').unsigned().notNullable();
    // relationship 1 - n
    table.foreign('user_id').references('id').inTable('users');

    table.timestamp('create_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
  });

/**
 * this function delete the migrations to the company table related database
 * @summary This function uses knex to delete the table as its columns in a simple and efficient way.
 * @param {Knex.JS} knex - knex is a library that makes it possible to perform migrations in a simple way
 * @return {Knex.JS} it returns the knex schema to delete the table
 */
exports.down = (knex) => knex.schema.dropTable('company');
