

exports.up = function(knex) {
    return knex.schema.createTable('lots', lots => {
        lots.increments();
        lots.bigInteger('auctionId').notNullable()
        lots.bigInteger('categoryId').notNullable()
        lots.bigInteger('locationId').notNullable()
        lots.bigInteger('sellerId').notNullable()
        lots.bigInteger('lotNum')
        lots.string('title').notNullable()
        lots.text('description')
        lots.string('condition', 20).notNullable()
        lots.string('lotMeasurments')
        lots.text('locationText')
        lots.decimal('startingBid')
        lots.decimal('soldBid')
        lots.decimal('transportFee')
        lots.text('instructions')
        lots.string('youtubeURL')
        lots.boolean('isOpen').defaultsTo(false)
        lots.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lots");
};
