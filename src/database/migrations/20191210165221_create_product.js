
exports.up = function(knex) {
  return knex.schema.createTable('product', table => {
    table.increments('id').primary();
    table.integer('brandId').unsigned().references('id').inTable('brand');
    table.string('name').notNull();
    table.string('description').notNull();
    table.decimal('price', 6, 2).notNull();
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
