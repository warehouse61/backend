


exports.up = function(knex) {
    return knex.schema.createTable('lot_comments', lot_comments => {
        lot_comments.increments();
        lot_comments.text('comment').notNullable()
        lot_comments.bigInteger('userId').notNullable()
        lot_comments.bigInteger('lotId').notNullable()
        lot_comments.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lot_comments");
};