

exports.up = function(knex) {
    return knex.schema.createTable('affiliate_locations', affiliate_locations => {
        affiliate_locations.increments();
        affiliate_locations.bigInteger('affiliateId').notNullable()
        affiliate_locations.bigInteger('locationId').notNullable()
        affiliate_locations.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("affiliate_locations");
};