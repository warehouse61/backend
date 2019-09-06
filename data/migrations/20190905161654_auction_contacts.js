

exports.up = function(knex) {
    return knex.schema.createTable('auction_contacts', auction_contacts => {
        auction_contacts.increments();
        auction_contacts.integer('auctionId')
                            .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('auctions')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        auction_contacts.integer('sellerId')
                            .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('sellers')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        auction_contacts.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auction_contacts");
};
