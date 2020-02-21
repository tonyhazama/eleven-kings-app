
exports.up = function(knex) {
  knex.schema.alterTable('product', function(table) {
    table.integer('quantity').after('price').defaultTo(0);
    table.string('image').after('price').defaultTo('');
 })
};

exports.down = function(knex) {
  
};
