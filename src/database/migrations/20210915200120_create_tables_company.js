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

    table.timestamp('create_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('company');
