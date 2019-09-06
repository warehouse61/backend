


exports.up = function(knex) {
    return knex.schema.createTable('lot_watchlist', lot_watchlist => {
        lot_watchlist.increments();
        lot_watchlist.bigInteger('userId').notNullable()
        lot_watchlist.bigInteger('lotId').notNullable()
        lot_watchlist.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lot_watchlist");
};