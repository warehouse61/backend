


exports.up = function(knex) {
    return knex.schema.createTable('lot_watchlist', lot_watchlist => {
        lot_watchlist.increments('lot_watchlistId');
        lot_watchlist.integer('userId')
                    .notNullable()
                    .unsigned()
                    .references('userId')
                    .inTable('users')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')

        lot_watchlist.integer('lotId')
                    .notNullable()
                    .unsigned('lotId')
                    .references('id')
                    .inTable('lots')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
        lot_watchlist.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lot_watchlist");
};