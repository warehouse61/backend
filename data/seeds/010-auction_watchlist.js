
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('auction_watchlist').insert([
        {userId: 1, auctionId: 1},
        {userId: 1, auctionId: 2},
        {userId: 1, auctionId: 3}
      ]);
    
};
