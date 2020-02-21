
exports.up = function(knex) {
  return knex.schema.createTable('review', table => {
    table.increments('id').primary();
    table.integer('productId').unsigned().references('id').inTable('product');
    table.integer('userId').unsigned().references('id').inTable('user');
    table.string('description', 512).notNull();
    table.integer('rating', 2).notNull();
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('review');
};
