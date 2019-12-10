
exports.up = function(knex) {
  return knex.schema.createTable('brand', table => {
    table.increments('id').primary();
    table.string('brandName');
    table.string('foundedDate');
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('brand');
};
