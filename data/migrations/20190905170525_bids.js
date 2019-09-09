exports.up = function(knex) {
    return knex.schema.createTable('bids', bids => {
        bids.increments('bidId');
        bids.integer('userId')
            .notNullable()
            .unsigned()
            .references('userId')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        bids.integer('lotId')
            .notNullable()
            .unsigned()
            .references('lotId')
            .inTable('lots')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        bids.decimal('bid').notNullable()
        bids.decimal('maxBid')
        bids.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bids");
};