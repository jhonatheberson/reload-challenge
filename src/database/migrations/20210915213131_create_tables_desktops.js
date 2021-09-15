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

exports.down = (knex) => knex.schema.dropTable('desktops');
