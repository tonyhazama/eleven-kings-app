
exports.up = function(knex) {
  return knex.schema.createTable('product', table => {
    table.increments('id').primary();
    table.integer('brandId').unsigned().references('id').inTable('brand');
    table.string('name');
    table.string('description');
    table.string('price');
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
