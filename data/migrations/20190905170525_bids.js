exports.up = function(knex) {
    return knex.schema.createTable('bids', bids => {
        bids.increments();
        bids.bigInteger('userId').notNullable()
        bids.bigInteger('lotId').notNullable()
        bids.decimal('bid').notNullable()
        bids.decimal('maxBid')
        bids.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bids");
};