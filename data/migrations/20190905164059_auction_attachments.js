
exports.up = function(knex) {
    return knex.schema.createTable('auction_attachments', auction_attachments => {
        auction_attachments.increments();
        auction_attachments.integer('auctionId')
                             .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('auctions')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        auction_attachments.string('name')
        auction_attachments.string('type', 20)
        auction_attachments.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auction_attachments");
};