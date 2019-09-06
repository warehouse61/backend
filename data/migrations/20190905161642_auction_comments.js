
exports.up = function(knex) {
    return knex.schema.createTable('auction_comments', auction_comments => {
        auction_comments.increments();
        auction_comments.text('comment').notNullable()
        auction_comments.bigInteger('userId').notNullable()
        auction_comments.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("auction_comments");
};
