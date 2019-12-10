
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          id: 1,
          brandId: 1,
          name: 'Vodkaria',
          description: 'Its Verry Goot',
          price: 322
        },
        {
          id: 2,
          brandId: 1,
          name: 'Angel Piss',
          description: 'Its Verry Goot',
          price: 322
        },
        {
          id: 3,
          brandId: 3,
          name: 'VodLOJI',
          description: 'Its Verry Goot',
          price: 322
        },
      ]);
    });
};
