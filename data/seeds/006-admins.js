
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('admins').insert([
        {affiliateId: 1, userId: 1},
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
        {affiliateId: 10, userId: 31}


        

      ]);
    
};
