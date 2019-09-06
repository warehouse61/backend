
exports.up = function(knex) {
    return knex.schema.createTable('auction_watchlist', auction_watchlist => {
        auction_watchlist.increments();
        auction_watchlist.integer('auctionId')
                            .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('affiliates')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        auction_watchlist.integer('userId')
                            .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('users')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        auction_watchlist.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auction_watchlist");
};
