
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('auction_contacts').insert([
        {sellerId: 1, auctionId: 1 },
        {sellerId: 1, auctionId: 2 },
        
      ]);
    
};
