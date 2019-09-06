exports.up = function(knex) {
    return knex.schema.createTable('auctions', auctions => {
        auctions.increments();
        auctions.integer('affiliateId')
                .notNullable()
                .unsigned()
                .references("id")
                .inTable('affiliates')
                
        auctions.integer('locationId')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('locations')
        auctions.string('title', 255).notNullable()
        auctions.datetime('startDate')
        auctions.datetime('endDate')
        auctions.boolean('isLoadingAssistance').defaultTo(false)
        auctions.boolean('isListLotLocations').defaultTo(false)
        auctions.boolean('isPostAddress').defaultTo(false)
        auctions.boolean('isAllowPayments').defaultTo(true)
        auctions.boolean('isTaxableLocation').defaultTo(false)
        auctions.boolean('isLockAuction').defaultTo(true)
        auctions.string('status', 20)
        auctions.string('format', 20)
        auctions.text('description')
        auctions.text('notesToBidder')
        auctions.integer('numLotsClosed').defaultTo(1)
        auctions.integer('lotsClosedPerMinute').defaultTo(1)
        auctions.date('pickUpDate')
        auctions.time('pickupStartTime')
        auctions.time('pickupEndTime')
        auctions.date('altPickUpDate')
        auctions.time('altPickupStartTime')
        auctions.time('altPickupEndTime')
        auctions.string('timeZone', 3).defaultTo('EST')
        auctions.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auctions");
};

