
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('brand').del()
    .then(function () {
      // Inserts seed entries
      return knex('brand').insert([
        {id: 1, name: 'Chivas Regal', foundedDate: '1999-12-21'},
        {id: 2, name: 'Jack Daniels', foundedDate: '1721-03-09'},
        {id: 3, name: 'Ballantines', foundedDate: '1899-11-30'},
      ]);
    });
};
