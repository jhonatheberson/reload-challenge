
exports.up = knex => knex.schema.createTable('contributors', (table) =>{
  table.increments('id')
  table.string('firstName', [30]).notNullable()
  table.string('lastName', [30]).notNullable()
  table.string('title', [30]).notNullable()
  table.string('jobTitle', [30]).notNullable()
  table.integer('age', [30]).notNullable()
  table.integer('company_id').unsigned().notNullable()


  table.foreign('company_id').references('id').inTable('company');


  table.timestamp('create_at').defaultTo(knex.fn.now())
  table.timestamp('update_at').defaultTo(knex.fn.now())
})

exports.down = (knex) => knex.schema.dropTable('contributors');
