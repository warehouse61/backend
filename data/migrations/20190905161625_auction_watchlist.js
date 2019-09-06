
exports.up = function(knex) {
    return knex.schema.createTable('auction_watchlist', auction_watchlist => {
        auction_watchlist.increments();
        auction_watchlist.bigInteger('auctionId').notNullable()
        auction_watchlist.bigInteger('userId').notNullable()
        auction_watchlist.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auction_watchlist");
};
