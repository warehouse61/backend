


exports.up = function(knex) {
    return knex.schema.createTable('lot_comments', lot_comments => {
        lot_comments.increments();
        lot_comments.text('comment').notNullable()
        lot_comments.integer('userId').notNullable()
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
        
        lot_comments.integer('lotId')
                             .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('lots')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        lot_comments.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lot_comments");
};