

exports.up = function(knex) {
    return knex.schema.createTable('lots', lots => {
        lots.increments();
        lots.integer('auctionId')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('auctions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        lots.integer('categoryId').notNullable()
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('categories')
        lots.integer('locationId')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('locations')
        lots.integer('sellerId').notNullable()
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('sellers')
            
        lots.integer('lotNum')
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
