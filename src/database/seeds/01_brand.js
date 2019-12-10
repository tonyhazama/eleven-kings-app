
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('brand').del()
    .then(function () {
      // Inserts seed entries
      return knex('brand').insert([
        {id: 1, brandName: 'Chivas Regal', foundedDate: '1999-12-21'},
        {id: 2, brandName: 'Jack Daniels', foundedDate: '1721-03-09'},
        {id: 3, brandName: 'Ballantines', foundedDate: '1899-11-30'},
      ]);
    });
};
