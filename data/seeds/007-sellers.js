
exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('sellers').insert([
        { affiliateId: 1, userId: 1 },
        {affiliateId: 1, userId: 2},
        {affiliateId: 2, userId: 3},
        {affiliateId: 2, userId: 4},
        {affiliateId: 2, userId: 5},
        {affiliateId: 2, userId: 6},
        {affiliateId: 3, userId: 7},
        {affiliateId: 4, userId: 8},
        {affiliateId: 4, userId: 9},
        {affiliateId: 5, userId: 10},
        {affiliateId: 5, userId: 11},
        {affiliateId: 5, userId: 12},
        {affiliateId: 6, userId: 16},
        {affiliateId: 7, userId: 22},
        {affiliateId: 7, userId: 23},
        {affiliateId: 8, userId: 29},
        {affiliateId: 9, userId: 30},
        {affiliateId: 1, userId: 32},
        {affiliateId: 1, userId: 33},
        {affiliateId: 2, userId: 34},
        {affiliateId: 2, userId: 35},
        {affiliateId: 2, userId: 36},
        {affiliateId: 3, userId: 37},
        {affiliateId: 3, userId: 41},
        {affiliateId: 4, userId: 43},
        {affiliateId: 5, userId: 44},
        {affiliateId: 6, userId: 47},
        {affiliateId: 6, userId: 50},
        {affiliateId: 6, userId: 51},
        {affiliateId: 7, userId: 52},
        {affiliateId: 7, userId: 53},
        {affiliateId: 8, userId: 54},
        {affiliateId: 8, userId: 55},
        {affiliateId: 8, userId: 56},
        {affiliateId: 9, userId: 57},
        {affiliateId: 10, userId: 58},
        {affiliateId: 10, userId: 59},
        {affiliateId: 10, userId: 60}
      ]);
    
};
