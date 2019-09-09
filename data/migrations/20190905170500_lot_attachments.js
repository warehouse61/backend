exports.up = function(knex) {
    return knex.schema.createTable('lot_attachments', lot_attachments => {
        lot_attachments.increments('lot_attachmentId');
        lot_attachments.binary('attachment').notNullable()
        lot_attachments.string('name')
        lot_attachments.string('type').notNullable()
        lot_attachments.integer('lotId')
                            .notNullable()
                            .unsigned()
                            .references('lotId')
                            .inTable('lots')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE')
        lot_attachments.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lot_attachments");
};
