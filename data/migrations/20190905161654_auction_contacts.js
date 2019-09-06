

exports.up = function(knex) {
    return knex.schema.createTable('auction_contacts', auction_contacts => {
        auction_contacts.increments();
        auction_contacts.bigInteger('auctionId').notNullable()
        auction_contacts.bigInteger('sellerId').notNullable()
        auction_contacts.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auction_contacts");
};
