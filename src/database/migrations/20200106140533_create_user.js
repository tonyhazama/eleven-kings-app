
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.string('username').notNull();
    table.string('email').notNull();
    table.string('password').notNull();
    table.string('fullname').notNull();
    table.string('image').notNull();
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
  
};
