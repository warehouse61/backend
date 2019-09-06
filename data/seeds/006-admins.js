
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('admins').insert([
        {adminId: 1, userId: 1},
        {adminId: 1, userId: 2},
        {adminId: 2, userId: 3},
        {adminId: 2, userId: 4},
        {adminId: 2, userId: 5},
        {adminId: 2, userId: 6},
        {adminId: 3, userId: 7},
        {adminId: 4, userId: 8},
        {adminId: 4, userId: 9},
        {adminId: 5, userId: 10},
        {adminId: 5, userId: 11},
        {adminId: 5, userId: 12},
        {adminId: 6, userId: 16},
        {adminId: 7, userId: 22},
        {adminId: 7, userId: 23},
        {adminId: 8, userId: 29},
        {adminId: 9, userId: 30},
        {adminId: 10, userId: 31}


        

      ]);
    
};
