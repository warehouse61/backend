

exports.up = function(knex) {
    return knex.schema.createTable('affiliate_locations', affiliate_locations => {
        affiliate_locations.increments();
        affiliate_locations.integer('affiliateId')
                            .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('affiliates')
                            .onDelete('CASCADE')
                             .onUpdate('CASCADE')
        affiliate_locations.integer('locationId')
                            .notNullable()
                            .unsigned()
                            .references('id')
                            .inTable('locations')
                            .onDelete('CASCADE')
                           .onUpdate('CASCADE')
        affiliate_locations.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("affiliate_locations");
};